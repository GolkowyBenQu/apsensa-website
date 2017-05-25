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
}

$response = '';
$action = $_GET['action'];
$api = new Api();

if (method_exists($api, $action)) {
    $response = $api->$action();
}

echo(json_encode($response));
die;