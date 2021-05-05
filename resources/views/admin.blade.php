<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
    <link href="{{mix('app.css', '/vendor/ebank')}}" rel="stylesheet" type="text/css">
    <title>EBank Dashboard</title>
    <script>
        const $SITE_NAME = "{{config('app.name')}}";
        const $EBANK_PATH = "/{{config('ebank.path')}}";
    </script>
</head>
<body>
<div id="app"></div>
<script src="{{mix('app.js', '/vendor/ebank')}}"></script>
</body>
</html>
