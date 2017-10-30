---
layout: defaults
title: Code Snippets
description: Code Snippets and Config Values
permalink: /snippets
main_menu: false
weight: 45
---

<section>
  <div class='inner-section'>
  <h2>Code Snippets</h2>
    <article>
      <ul class='anchor_list'>
        <li><a href='#curl'>Curl</a></li>
        <li><a href='#css'>CSS</a></li>
        <li><a href='#dev_tools'>Dev Tools</a></li>
        <li><a href='#html5'>HTML</a></li>
        <li><a href='#git'>Git</a></li>
        <li><a href='#javascript'>JavaScript</a></li>
        <li><a href='#laravel'>Laravel</a></li>
        <li><a href='#linux'>Linux</a></li>
        <li><a href='#mac'>Mac</a></li>
        <li><a href='#netstat'>Netstat</a></li>
        <li><a href='#scp'>SCP</a></li>
        <li><a href='#security'>Security</a></li>
        <li><a href='#mysql'>MySql</a></li>
        <li><a href='#ssh'>SSH</a></li>
        <li><a href='#php'>PHP</a></li>
        <li><a href='#psql'>PostgreSQL</a></li>
        <li><a href='#tmux'>Tmux</a></li>
        <li><a href='#vim'>Vim</a></li>
        <li><a href='#windows'>Windows</a></li>
      </ul>
    </article>

    <article>
      <a name='curl'></a>
      <h3>Curl</h3>
      <h4>Get HTTP Response</h4>
      <pre><code class='bash'>
        curl -I example.com
      </code></pre>
      <h4>Get Just Response Code</h4>
      <pre><code class='bash'>
        curl -s -o /dev/null -w "%{http_code}" example.com
      </code></pre>
      <h4>Curl POST</h4>
      <pre><code class='bash'>
        curl --data "information=to&send=to the server" http://example.com
      </code></pre>
    </article>

    <article>
      <a name='css'></a>
      <h3>CSS</h3>
      <h4>Switch to box sizing</h4>
      <pre><code class='css'>
        html {
          box-sizing: border-box;
        }

        *, *:before, *:after {
          box-sizing: inherit;
        }
      </code></pre>
      <h4>Clear Floats</h4>
      <pre><code class='css'>
        .clearfix:after {
          content: '';
          display: block;
          clear: both;
          height: 0;
          visibility: hidden;
        }
      </code></pre>
      <h4>Margin/Padding Shorthand</h4>
      <pre><code class='css'>
        //top right bottom left:
        margin (or padding): 10px 20px 10px 20px;

        //top/bottom left/right:
        margin (or padding): 10px 20px;

        //top left/right bottom:
        margin (or padding): 10px 20px 10px;
      </code></pre>
    </article>

    <article>
      <a name='dev_tools'></a>
      <h3>Dev Tools</h3>
      <h4>Chrome</h4>
      <div class='code'>
        <dl>
          <dt>Logging:</dt>
          <dd><code>console.log('test string');</code></dd>
          <dt>Log Variable as an Object:</dt>
          <dd><code>console.dir(paragraph);</code></dd>
          <dt>Log an object as a table:</dt>
          <dd><code>console.table(all_animals);</code></dd>
        </dl>
      </div>
    </article>

    <article>
      <a name='html5'></a>
      <h3>HTML</h3>
      <h4>HTML5 Doctype</h4>
      <pre><code class='html'>
        <!DOCTYPE html>
      </code></pre>
      <h4>Tags</h4>
      <ul>
        <li>&lt;cite&gt; - cite a source</li>
        <li>&lt;kdb&gt;  - text entered from a keyboard (i.e. `cd`, `pwd`)</li>
        <li>&lt;pre&gt;  - preserves white space in html output</li>
        <li>&lt;var&gt;  - used for outputting a variable in html</li>
        <li>&lt;del&gt;  - show removed text (sometimes styled with strike-through mark)</li>
      </ul>
    </article>

    <article>
      <a name='git'></a>
      <h3>Git</h3>
      <h4>Saves Current Changes with Stash</h4>
      <pre><code class='git'>
        git stash
      </code></pre>
      <h4>Restores Most Recently Stashed Changes</h4>
      <pre><code class='git'>
        git stash pop
      </code></pre>
      <h4>List Stashes</h4>
      <pre><code class='git'>
        git stash list
      </code></pre>
      <h4>Restore Specific Stash</h4>
      <pre><code class='git'>
        git stash pop stash@{3}
      </code></pre>
      <h4>Create and switch to branch</h4>
      <pre><code class='git'>
        git checkout -b new_branch_name
      </code></pre>
      <h4>Delete local branch</h4>
      <pre><code class='git'>
        git branch -d local_branch_name
      </code></pre>
      <h4 markdown='1'>Remove one file from `git add`</h4>
      <pre><code class='git'>
        git reset &lt;file&gt;
      </code></pre>
      <h4 markdown='1'>Remove files added with `git add .`</h4>
      <pre><code class='git'>
        git reset
      </code></pre>
      <h4>Roll back previous commit (preserving file changes)</h4>
      <pre><code class='git'>
        git reset --soft HEAD~1
      </code></pre>
      <h4>Roll back previous commit (discarding file changes)</h4>
      <pre><code class='git'>
        git reset --hard HEAD~1
      </code></pre>
    </article>

    <article>
      <a name='javascript'></a>
      <h3>JavaScript</h3>
      <h4>Destructuring</h4>
      <pre>
        <code>
          //Object Destructuring:
          let foods = {
            vegetable: 'spinach',
            fruit: 'apple',
            nut: 'almond',
          };
          const { vegetable, fruit } = foods;

          //Array Destructuring:
          let dirty_dozen = [ 'Strawberries', 'Spinach', 'Nectarines', 'Apples', 
                              'Peaches', 'Pears', 'Cherries', 'Grapes', 'Celery', 
                              'Tomatoes', 'Sweet bell peppers', 'Potatoes' ];
          
          const [ one_item ] = dirty_dozen;

        </code>
      </pre>

      <h4>Only display content when JavaScript is enabled</h4>
      <pre>
        <code class='javascript'>
          document.getElementsByTagName('body')[0].className += ' js';
        </code>
        <code class='css'>
          /* Only set when JavaScript is enabled in browser: */
          body.js .only-js {
            border: 1px solid #a0a0a0;
            display: block;
            ...
          }
        </code>
      </pre>

      <h4>Detect Keyboard Input</h4>
      <p data-height="265" data-theme-id="dark" data-slug-hash="vZjKVr" data-default-tab="css,result" data-user="joshayoung" data-embed-version="2" data-pen-title="Detect Keyboard Input" class="codepen">See the Pen <a href="https://codepen.io/joshayoung/pen/vZjKVr/">Detect Keyboard Input</a> by Josh (<a href="https://codepen.io/joshayoung">@joshayoung</a>) on <a href="https://codepen.io">CodePen</a>.</p>
      <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

      <h4>Basic Class Structure</h4>
      <pre><code class='javascript'>
        var Shape = function(sides) {
          this.sides = sides;
        }

        Shape.prototype.area = function() {
          calculate ...
        }

        var square = new Shape(4);
      </code></pre>
      <h4>Immediately Invoked Function Expression (IIFE)</h4>
      <pre><code class='javascript'>
        (function() {
          ...executed immediately
        })());
      </code></pre>
    </article>

    <article>
      <a name='laravel'></a>
      <h3>Laravel</h3>
      <h4>Basic Migration</h4>
      <pre><code class='bash'>
        php artisan make:migration the_users_table --create=users
      </code></pre>
      <h4>Refresh Auto Load Files</h4>
      <pre><code class='bash'>
        composer dump-autoload
      </code></pre>
      <h4>Run the Migrations</h4>
      <pre><code class='bash'>
        php artisan migrate
      </code></pre>
      <h4>Open Laravel Shell</h4>
      <pre><code class='bash'>
        php artisan tinker
      </code></pre>
      <h4>Create the Model along with the Migration</h4>
      <pre><code class='bash'>
        php artisan make:model User -m
      </code></pre>
      <h4>Create Controller</h4>
      <pre><code class='bash'>
        php artisan make:controller UserController
      </code></pre>
      <h4>Create Model, Controller, and Migration</h4>
      <pre><code class='bash'>
        php artisan make:model User -mc
      </code></pre>
      <h4>Create Resoureful Controller</h4>
      <pre><code class='bash'>
        php artisan make:controller UsersController -r
      </code></pre>

    </article>

    <article>
      <a name='linux'></a>
      <h3>Linux</h3>
      <h4>Add Static IP</h4>
      <h5>Red Hat/CentOS</h5>
      <p markdown='1' class='no-mb'>Add modify the entries below within: `/etc/sysconfig/network-scripts/ifcfg-eth0` (change IP addresses according to your network). The name for your network connection could differ from `ifcfg-eth0`.</p>
      <pre><code class='bash'>
        ...
        DEVICE="eth0"
        BOOTPROTO="static"
        IPADDR="192.168.3.100"
        NETMASK="255.255.255.0"
        GATEWAY="192.168.3.1"
        ONBOOT="yes"
        ...
      </code></pre>
      <h5>Ubuntu/Debian</h5>
      <p markdown='1' class='no-mb'>Add or edit the lines below in this file `/etc/network/interfaces`.</p>
      <pre><code>
        ...
        iface eth0 inet static
        address 192.168.3.100
        netmask 255.255.255.0
        gateway 192.168.3.1
        ...
      </code></pre>
      <h4 markdown='1'>Show Security Settings with `ls`</h4>
      <pre><code class='bash'>
        ls -Z
      </code></pre>
      <h4 markdown='1'>Crontab</h4>
      <pre><code class='bash'>
        *  *  *  *  *         command
        -  -  -  -  -  
        |  |  |  |  |
        |  |  |  |  +---------------------- day of week (0 - 6) (0 - Sunday)
        |  |  |  +--------------------- month (1 - 12)
        |  |  +------------------- day of month (1 - 31) 
        |  +------------- hour (0 - 23) 
        +------------ minute (0 - 59)
      </code></pre>
      <h4 markdown='1'>Write ISO to Disk</h4>
      <pre><code class='bash'>
        sudo dd bs=4M if=/location/of/file.ios of=/dev/drivename && sync
      </code></pre>
      <h4 markdown='1'>Find Linux Version</h4>
      <h5>Kernel:</h5>
      <pre><code class='bash'>
        uname -mrs
      </code></pre>
      <h5>Distribution:</h5>
      <pre><code class='bash'>
        cat /etc/*-release
      </code></pre>
      <h4>Prevent Command from Being Recorded in Terminal History</h4>
      <pre><code class='bash'>
        &lt;space&gt; command
      </code></pre>
      <h4>Clear Terminal</h4>
      <pre><code class='bash'>
        CTRL + l
      </code></pre>
      <h4>Extract a .tar File</h4>
      <pre><code class='bash'>
        tar -xvf file.tar
      </code></pre>
      <h4>Extract a .tar.gz File</h4>
      <pre><code class='bash'>
        tar -xzvf file.tar.gz
      </code></pre>
      <h4>Extract a .tar.bz2 File</h4>
      <pre><code class='bash'>
        tar -xjvf file.tar.bz2
      </code></pre>
      <h4>Finding a File</h4>
      <pre><code class='bash'>
        find / -name [file name you are searching] 2> /dev/null
      </code></pre>
    </article>

    <article>
      <a name='mac'></a>
      <h3>Mac</h3>
      <h4>Flush DNS</h4>
      <pre><code class='bash'>
        sudo killall -HUP mDNSResponder
      </code></pre>
    </article>

    <article>
      <a name='mysql'></a>
      <h3>MySQL</h3>
      <h5>Connect to Database</h5>
      <pre><code class='bash'>
        mysql -u [username] -p [password] -h [hostname]
      </code></pre>
    </article>

    <article>
      <a name='netstat'></a>
      <h3>Netstat</h3>
      <h4>Find Listening Port (Bash)</h4>
      <pre><code class='bash'>
        netstat -nao | find "80"
      </code></pre>
      <h4>Find Listening Port (Windows)</h4>
      <pre><code class='bash'>
        netstat -nao | findstr "0.0.80"
      </code></pre>
    </article>

    <article>
      <a name='mysql'></a>
      <h3>MySQL</h3>
      <h5>Connect to Database</h5>
      <pre><code class='bash'>
        mysql -u [username] -p [password] -h [hostname]
      </code></pre>
    </article>

    <article>
      <a name='psql'></a>
      <h3>PostGresql</h3>
      <div class='code'>
        <dl>
          <dt>Connect to Database</dt>
          <dd><code>\c DATABASE_NAME</code></dd>
          <dt>List Databases</dt>
          <dd><code>\l</code></dd>
          <dt>Tables in database:</dt>
          <dd><code>\dt</code></dd>
          <dt>Describe Table</dt>
          <dd><code>\dt+</code></dd>
          <dt>Leave SQL Server</dt>
          <dd><code>\q</code></dd>
        </dl>
      </div>
    </article>

    <article>
      <a name='ssh'></a>
      <h3>SSH</h3>
      <h4>Remote Port Forwarding</h4>
      <p>Here <strong>9100</strong> is the remote port and <strong>22</strong> is the remote port.</p>
      <pre><code class='bash'>
        ssh -R 9100:127.0.0.1:22 username@192.168.6.7
      </code></pre>
      <h4>Local Port Forward</h4>
      <p>In this case, <strong>9100</strong> would be our local port and <strong>80</strong> would be the remote.</p>
      <pre><code class='bash'>
        ssh -L 9100:www.remotesite.com:80 username@host
      </code></pre>
    </article>

    <article>
      <a name='scp'></a>
      <h3>SCP</h3>
      <h4>Local to Remote</h4>
      <pre><code class='bash'>
        scp file.txt username@host:/to/myremote/directory
      </code></pre>
      <h4>Remote to Local</h4>
      <pre><code class='bash'>
        scp username@host:file.txt /to/my/local/directory
      </code></pre>
    </article>

    <article>
      <a name='security'></a>
      <h3>Security</h3>
      <h4>Nmap Ping Scan (detect hosts)</h4>
      <pre><code class='bash'>
        nmap -sP 192.168.1.0/24
      </code></pre>
      <h4>Bash Ping Sweep</h4>
      <h4>Usage: <strong>./sweep.sh 192.168.1</strong></h4>
      <pre><code class='bash'>
        #!/bin/bash
        ip=$1
        for i in `seq 0 1 255`; do
            ping -c 3 -t 5 $ip.$i > /dev/null 2>&1 && echo $ip.$i is up;
        done
      </code></pre>
    </article>

    <article>
      <a name='php'></a>
      <h3>PHP</h3>
      <h4>GET/POST Assignment</h4>
      <pre><code class='php'>
        $var = isset($_GET['var']) ? $_GET['var'] : '';
      </code></pre>
    </article>

    <article>
      <a name='tmux'></a>
      <h3>Tmux</h3>
      <div class='code'>
        <dl>
          <dt>Split Window Vertically:</dt>
          <dd><code>Ctrl + b %</code></dd>
          <dt>Split Window Horizontally:</dt>
          <dd><code>Ctrl + b "</code></dd>
          <dt>Navigate Between Windows:</dt>
          <dd><code>Ctrl + b &lt;ARROW KEYS&gt;</code></dd>
          <dt>Detach from tmux:</dt>
          <dd><code>Ctrl + d</code></dd>
          <dt>Re-attach to tmux:</dt>
          <dd><code>tmux attach -t &lt;SESSION NAME&gt;</code> (i.e. tmux attach -t 0)</dd>
          <dt>Show running tmux sessions:</dt>
          <dd><code>tmux ls</code></dd>
        </dl>
      </div>
    </article>

    <article>
      <a name='vim'></a>
      <h3>Vim</h3>
      <div class='code'>
        <dl>
          <dt>Split Editor:</dt>
          <dd><code>:vsplit</code> new_file_name</dd>
          <dt>Vertical Split Editor:</dt>
          <dd><code>:vsplit</code> new_file_name</dd>
          <dt>Mark Current Line:</dt>
          <dd><code>m[a-z]</code> (i.e. <code>ma</code>)</dd>
          <dt>Go to Mark "h":</dt>
          <dd><code>'h</code></dd>
          <dt>Show Registers:</dt>
          <dd><code>:reg</code></dd>
          <dt>Paste from # registers:</dt>
          <dd><code>"[0-9]p</code> (i.e. <code>"0p</code>, <code>"1p</code>, etc.)</dd>
          <dt>Yank to register:</dt>
          <dd><code>"[a-z]y</code> (then: <code>"ap</code> to paste)</dd>
          <dt>Record Macro:</dt>
          <dd><code>q[a-z]</code> (i.e. <code>qm</code> - records to `m`)</dd>
          <dt>Stop Macro Recording:</dt>
          <dd><code>q</code></dd>
          <dt>Execute Macro:</dt>
          <dd><code>@[a-z]</code> (i.e. <code>@m</code> or <code>20 @m</code> to run 20 times</dd>
          <dt>Increment Number:</dt>
          <dd><code>Ctrl + a</code></dd>
          <dt>Search / Replace Globally:</dt>
          <dd><code>:%s/searchfor/replacewith/g</code></dd>
          <dt>Search / Replace Current Line:</dt>
          <dd><code>:s/searchfor/replacewith/g</code></dd>
          <dt>Search / Replace Ask for Confirmation:</dt>
          <dd><code>:%s/searchfor/replacewith/gc</code></dd>
        </dl>
      </div>
    </article>

    <article>
      <a name='windows'></a>
      <h3>Windows</h3>
      <h4>Flush DNS</h4>
      <pre><code class='batch'>
        ipconfig /flushdns
      </code></pre>

      <h4>All Network Info</h4>
      <pre><code class='batch'>
        ipconfig /all
      </code></pre>
    </article>

  </div><!-- inner-section -->
</section>