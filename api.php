<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST');

class Api
{
    public function getProjects()
    {
        $content = file_get_contents('content.json');
        $content = json_decode($content);

        return $content->projects;
    }

    public function getProjectDetails()
    {
        $projectName = $_GET['name'];

        if (!$projectName) {
            return null;
        }

        $content = file_get_contents('content.json');
        $content = json_decode($content);
        $projects = $content->projects;

        foreach ($projects as $project) {
            if ($projectName === $project->name) {
                return $project;
            }
        }
    }

    public function sendMessage()
    {
        $requestBody = file_get_contents('php://input');
        $requestBody = json_decode($requestBody);

        if (
            empty($requestBody->name) ||
            empty($requestBody->email) ||
            empty($requestBody->message)
        ) {
            throw new \Exception('Niepoprawne dane');
        }

        $contactEmail = 'hello@apsensa.pl';
        $to = $contactEmail;
        $subject = 'Nowa wiadomość od klienta Apsensy';
        $message = 'Nowa wiadomość od klienta zainteresowanego ofertą. <br/><br/>
                    Sender data:<br/>Name: ' . $requestBody->name
            . '<br/>Email: ' . $requestBody->email
            . '<br/>Message: ' . $requestBody->message . '<br/>';
        $headers = 'From: apsensa.pl' . "\r\n" .
            'Reply-To: ' . $contactEmail . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

        mail($to, $subject, $message, $headers, $to);

        return 'success';
    }
}

$response = '';
$action = $_GET['action'];
$api = new Api();

if (method_exists($api, $action)) {
    $response = $api->$action();
}

echo(json_encode($response));
die;