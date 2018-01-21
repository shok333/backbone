<?php
    if(split('/', $_SERVER['REQUEST_URI'])[1] == 'ajax'){
        $postList = array(
            array(
                'header' => 'header 1',
                'p' => 'p 1'
            ),
            array(
                'header' => 'header 2',
                'p' => 'p 2'
            )
        );
        echo json_encode($postList);
    }
    else{
        readfile('index.html');
    }
?>