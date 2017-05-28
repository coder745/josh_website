---
layout: defaults
title: Code Snippets
description: Code Snippets and Config Values
permalink: /snippets
weight: 45
---

<section>
  <div class='inner-section'>
  <h2>Code Snippets</h2>
    <article>
      <ul class='anchor_list'>
        <li><a href='#css'>CSS</a></li>
        <li><a href='#html5'>HTML</a></li>
        <li><a href='#git'>Git</a></li>
        <li><a href='#javascript'>JavaScript</a></li>
        <li><a href='#linux'>Linux</a></li>
        <li><a href='#php'>PHP</a></li>
        <li><a href='#tmux'>Tmux</a></li>
        <li><a href='#vim'>Vim</a></li>
      </ul>
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
    </article>
    <article>
      <a name='html5'></a>
      <h3>HTML</h3>
      <h4>HTML5 Doctype</h4>
      <pre><code class='html'>
        <!DOCTYPE html>
      </code></pre>
    </article>
    <article>
      <a name='git'></a>
      <h3>Git</h3>
      <h4>Create and switch to branch</h4>
      <pre><code class='git'>
          git checkout -b new_branch_name
      </code></pre>
      <h4>Delete branch</h4>
      <pre><code class='git'>
          git branch -d new_branch_name
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
      <h4>Only display content when JavaScript is enabled</h4>
      <pre><code class='javascript'>
          document.getElementsByTagName('body')[0].className += ' js';
        </code>
        <code class='css'>
          /* Only set when JavaScript is enabled in browser: */
          body.js .only-js {
            border: 1px solid #a0a0a0;
            display: block;
            ...
          }
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
      <table class='code'>
        <tbody>
          <tr>
            <th>Split Window Vertically:</th>
            <td><code>Ctrl + b %</code></td>
          </tr>
          <tr>
            <th>Split Window Horizontally:</th>
            <td><code>Ctrl + b "</code></td>
          </tr>
          <tr>
            <th>Navigate Between Windows:</th>
            <td><code>Ctrl + b &lt;ARROW KEYS&gt;</code></td>
          </tr>
          <tr>
            <th>Detach from tmux:</th>
            <td><code>Ctrl + d</code></td>
          </tr>
          <tr>
            <th>Re-attach to tmux:</th>
            <td><code>tmux attach -t &lt;SESSION NAME&gt;</code> (i.e. tmux attach -t 0)</td>
          </tr>
          <tr>
            <th>Show running tmux sessions:</th>
            <td><code>tmux ls</code></td>
          </tr>
        </tbody>
      </table>
    </article>
    <article>
      <a name='vim'></a>
      <h3>Vim</h3>
      <table class='code'>
        <tbody>
          <tr>
            <th>Split Editor:</th>
            <td><code>:split</code> new_file_name</td>
          </tr>
          <tr>
            <th>Vertical Split Editor:</th>
            <td><code>:vsplit</code> new_file_name</td>
          </tr>
          <tr>
            <th>Mark Current Line:</th>
            <td><code>m[a-z]</code> (i.e. <code>ma</code>)</td>
          </tr>
          <tr>
            <th>Go to Mark "h":</th>
            <td><code>'h</code></td>
          </tr>
          <tr>
            <th>Show Registers:</th>
            <td><code>:reg</code></td>
          </tr>
          <tr>
            <th>Paste from # registers:</th>
            <td><code>"[0-9]p</code> (i.e. <code>"0p</code>, <code>"1p</code>, etc.)</td>
          </tr>
          <tr>
            <th>Yank to register:</th>
            <td><code>"[a-z]y</code> (then: <code>"ap</code> to paste)</td>
          </tr>
          <tr>
            <th>Record Macro:</th>
            <td><code>q[a-z]</code> (i.e. <code>qm</code> - records to `m`)</td>
          </tr>
          <tr>
            <th>Stop Macro Recording:</th>
            <td><code>q</code></td>
          </tr>
          <tr>
            <th>Execute Macro:</th>
            <td><code>@[a-z]</code> (i.e. <code>@m</code> or <code>20 @m</code> to run 20 times</td>
          </tr>
          <tr>
            <th>Increment Number:</th>
            <td><code>Ctrl + a</code></td>
          </tr>
        </tbody>
      </table>
    </article>
  </div><!-- inner-section -->
</section>