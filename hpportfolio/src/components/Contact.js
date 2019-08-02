import React from 'react';
import { Badge } from 'reactstrap';

function Contact() {
  return (
    <div>
<h1 className="text-center">Contact Me</h1>
<h4 className="text-center">
<i class="fa fa-map-pin"></i> Raleigh, NC <br></br>
<i class="fa fa-envelope-o" ></i> <Badge href ="mailto: heatherhperi@gmail.com" color="light">Email</Badge> <br></br>
<i class="fa fa-github"></i> <Badge href="https://github.com/HeatherPeri" color="light">Github</Badge><br></br>
<i class="fa fa-linkedin-square"></i><Badge href=" https://www.linkedin.com/in/heather-peri-648023134/ " color="light">LinkedIn</Badge><br></br>
<i class="fa fa-file-o"></i>  <Badge href="#" color="light">Resume</Badge><br></br>

</h4>
    </div>
  );
}

export default Contact;