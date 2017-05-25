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
      <ul class='anchor-list'>
        <li><a href='#linux'>Linux</a></li>
        <li><a href='#tmux'>Tmux</a></li>
        <li><a href='#vim'>Vim</a></li>
      </ul>
    </article>
    <article>
      <a name='linux'></a>
      <h3>Linux</h3>
      <h4>Add Static IP</h4>
      <h5>Red Hat/CentOS</h5>
```
  echo test;
```
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