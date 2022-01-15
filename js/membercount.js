                    <?php

                    $json_options = [
                      "http" => [
                        "method" => "GET",
                        "header" => "Authorization: Bot NjQyNzU5Nzc0OTExNTk0NDk2.XcbmsA.Q2HXMbCz1-AbufkBFPzA7r1s0zU"
                      ]
                    ];
                    
                    $json_context = stream_context_create($json_options);
                    
                    $json_get     = file_get_contents('https://discordapp.com/api/guilds/795552912897736755/members?limit=1000', false, $json_context);
                    
                    $json_decode  = json_decode($json_get, true);
                    
                    echo '<h2>Member Count</h2>';
                    echo count($json_decode);
                    
                    echo '<h2>JSON Output</h2>';
                    echo '<pre>';
                    print_r($json_decode);
                    echo '</pre>';
                    
                    ?>