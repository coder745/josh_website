---
layout: defaults
title: Classes
description: Classess that Josh Young has taken including a short summary of each class.
permalink: /classes
weight: 26
---

<section>
    <div class='inner-section'>
        <h2>Classes I've Taken</h2>
        <article>
            <p>In an effort to continually learn new technologies and stay abreast of existing technologies, I have found it helpful to take advantage of opportunities for continuing education. Below I have listed classes (both classroom and online) that I have completed over the years.</p>
            <ul class='anchor-list'>
                <li><a href='#laracastsclasses'>Laracast Courses</a></li>
                <li><a href='#reactclass'>React for Beginners</a></li>
                <li><a href='#treehouse'>Tree House Classes</a></li>
                <li><a href='#pluralsight'>PluralSight Courses</a></li>
                <li><a href='#codeschool'>Code School Classes</a></li>
                <li><a href='#fedvte'>FedVTE Training</a></li>
                <li><a href='#kali'>Penetration Testing with Kali Linux</a></li>
                <li><a href='#securityplus'>Security+ Certification Class</a></li>
                <li><a href='#ceh'>CEH - Ethical Hacking and Countermeasures</a></li>
                <li><a href='#unified'>Unified Threat Management Introduction Course (pfSense)</a></li>
                <li><a href='#linuxsteelpivot3'>Linux Administration 310 - Service Configuration, Management, and LAMP Servers</a></li>
                <li><a href='#linuxsteelpivot2'>Linux Administration 210 - System and Network Management</a></li>
                <li><a href='#linuxsteelpivot1'>Linux Administration 110 - System Installation and Configuration</a></li>
            </ul>
        </article>

        <article>
            <a name='laracastsclasses'></a>
            <h3>Laracast Courses</h3>
            <p>Jeffery Way teaches some great courses at this site <a href='http://laracasts.com'>laracasts.com</a>. I have taken two of his courses (listed below).</p>
            <ul>
                <li><a href='https://laracasts.com/series/laravel-from-scratch-2017'>Laravel 5.4 from Scratch</a></li>
                <li><a href='https://laracasts.com/series/webpack-for-everyone'>Webpack for Everyone</a></li>
            </ul>
        </article>

        <article>
            <a name='reactclass'></a>
            <h3>React for Beginners</h3>
            <p>This was a great class by Wes Boss and a great introduction to the React framework.</p>
            <a href='https://reactforbeginners.com/'>React for Beginners</a>
        </article>

        <article>
            <a name='treehouse'></a>
            <h3>Tree House Classes</h3>
            <p>I took all of these classes as a part of a short Tree House membership. They were largely review for me, but some of the classes covered technologies that I had not had time to learn yet.</p>

            <ul class='smaller'>
                {% assign sorted_treehouses = site.data.treehouses | sort: 'title' %}
                {% for treehouse in sorted_treehouses %}
                    {% if treehouse.display != false %}
                        <li><a href='{{ treehouse.url }}'>{{ treehouse.title }}</a></li>
                    {% endif %}
                {% endfor %}
            </ul>
        </article>

        <article>
            <a name='pluralsight'></a>
            <h3>PluralSight Courses</h3>
            <p>PluralSight also offers some good content. It is not as focused as other platforms such as Code School though. I have taken a few courses from PluralSight which I have listed below.</p>
            <ul>
                <li><a href='https://app.pluralsight.com/library/courses/emmet-getting-started/table-of-contents'>Getting Started with Emmet</a></li>
                <li><a href='https://app.pluralsight.com/library/courses/docker-web-development/table-of-contents'>Docker for Web Developers</a></li>
            </ul>
        </article>

        <article>
            <a name='codeschool'></a>
            <h3>Code School Classes</h3>
            <p>The Code School site offers excellent classes. I took some of these as review and many as a way to level up my knowledge.</p>

            <ul class='smaller'>
                {% assign sorted_codeschools = site.data.codeschools | sort: 'title' %}
                {% for codeschool in sorted_codeschools %}
                    {% if codeschool.display != false %}
                        <li><a href='{{ codeschool.url }}'>{{ codeschool.title }}</a></li>
                    {% endif %}
                {% endfor %}
            </ul>
        </article>

        <article>
            <a name='fedvte'></a>
            <h3>FedVTE Training</h3>
            <p>These are free courses offered to government employees by the Department of Homeland Security. I completed the following courses through FedVTE.</p>
            <ul>
                <li><a href='https://fedvte.usalearning.gov/pdf/FedVTE_Training_Catalog.pdf'>Demilitarized Zone (DMZ) with IDS/IPS</a></li>
                <li><a href='https://fedvte.usalearning.gov/pdf/FedVTE_Training_Catalog.pdf'>Linux Operating System Security</a></li>
                <li><a href='https://fedvte.usalearning.gov/pdf/FedVTE_Training_Catalog.pdf'>Penetration Testing</a></li>
            </ul>
        </article>

        <article>
            <a name='kali'></a>
            <h3>Penetration Testing with Kali Linux</h3>
            <p>I took this class in preparation for Offensive Security's certification exam (OSCP). Unfortunately, I did not pass my first exam attempt and have not had time to re-test. After speaking with a few individuals who passed the exam, it seems that no one passes it on their first attempt anyway. For me it was a great way to learn more about security and many different security techniques that relate to web development. For these reasons, the class time alone was extremely informative!</p>
            <a href='https://www.offensive-security.com/information-security-training/penetration-testing-training-kali-linux/'>Penetration Testing with Kali Linux</a>
        </article>

        <article>
            <a name='securityplus'></a>
            <h3>CompTIA Security+ Certification Training</h3>
            <p>In preparation for the Security+ certification, I took this class covering the fundamentals on the CompTIA Security+ certification exam. This class was offered as a night class by the University of Alabama in Huntsville (UAH).</p>
            <a href='http://www.uah.edu/'>University of Alabama in Huntsville</a>
        </article>

        <article>
            <a name='ceh'></a>
            <h3>CEH - Ethical Hacking and Countermeasures</h3>
            <p>In preparation for the CEH certification, I took this class to teach me the fundamentals of ethical hacking. The training was offered by Dynetics in Huntsville, AL. I do not have a direct link to a description of the training; however, I have included a link to Dynetics below along with more information about the CEH certification.</p>
            <a href='http://www.dynetics.com/services/space/training'>Dynetics</a><br />
            <a href='https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/'>About CEH</a>
        </article>

        <article>
            <a name='unified'></a>
            <h3>Unified Threat Management Introduction Course</h3>
            <p>This class covered setting up a secure pfSense firewall as well as firewall best practices. This class was delivered by <a href='http://www.sudosecure.com'>SudoSecure</a>.</p>
        </article>

        <article>
            <a name='linuxsteelpivot3'></a>
            <h3>Linux Administration 310 - Service Configuration, Management and LAMP Servers</h3>
            <p>This was the third class in the series, and it taught more advanced topics such as the following: sed, awk, syslog, postfix, open source licensing, LAMP servers, etc.</p>
        </article>

        <article>
            <a name='linuxsteelpivot2'></a>
            <h3>Linux Administration 210 - System and Network Management</h3>
            <p>This class was a follow-up to the 110 class and went into further detail. It coved topics such as: Linux networking, DNS, RAID, LVM, authentication, scripting, etc.</p>
        </article>

        <article>
            <a name='linuxsteelpivot1'></a>
            <h3>Linux Administration 110 - System Installation and Configuration</h3>
            <p>Even though I had taken Linux classes in school, my company offered to send me to this class prior to taking on more Linux system administration duties at work. This class was mostly review for me since I had previous Linux experience and training, but it served as a good review and preparation for the classes that followed. This class went over basic Linux information such as the file system, input, output, process management, etc.</p>
        </article>
    </div><!-- inner-section -->
</section>