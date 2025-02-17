import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Faq() {
  return (
    <div>
      {/* Question 1 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h4 component="span">What genre of music are you looking for?</h4>
        </AccordionSummary>
        <AccordionDetails id="panel1-content">
          We are looking for music that is Electronic/Cinematic based. Pop is
          okay as well, as long as it has electronic influence. We also count
          genres like Lofi Hip Hop or Ambient as Electronic. We go
          on a case by case basis, so if you are confident in a submission of
          something else, then go ahead and submit!
        </AccordionDetails>
      </Accordion>
      {/* Question 2 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="panel-header"
        >
          <h4 component="span">What file format should I use?</h4>
        </AccordionSummary>
        <AccordionDetails id="panel2-content">
          Submissions must be in .wav or any other lossless format. <span className="red">&#x28;No
          MP3s!&#x29;</span>
        </AccordionDetails>
      </Accordion>
      {/* Question 3 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          className="panel-header"
        >
          <h4 component="span">
            Does Phoenix Artistrys accept tracks with explicit lyrics?
          </h4>
        </AccordionSummary>
        <AccordionDetails id="panel3-content">
          <span className="red">No we do not.</span> Please keep your music &#x28;and cover art&#x29; clean
          and free from explicit/suggestive language and content. &#x28;This
          includes religious cursing&#x29; We are trying to appeal to all
          audiences.
        </AccordionDetails>
      </Accordion>
      {/* Question 4 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
          className="panel-header"
        >
          <h4 component="span">
            Why the extended response time in July and December?
          </h4>
        </AccordionSummary>
        <AccordionDetails id="panel4-content">
          July and December are the two months we organize and release our
          Phoenix Artistrys Volumes. We also tend to overhaul our label and set
          any majour changes during these two months.
        </AccordionDetails>
      </Accordion>
      {/* Question 5 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
          className="panel-header"
        >
          <h4 component="span">How many times may I release per month?</h4>
        </AccordionSummary>
        <AccordionDetails id="panel5-content">
        Each artist can release twice a month max. This guideline is to give everybody room to put music out in a timely fashion. Hitting the limit consecutively is discouraged.
        </AccordionDetails>
      </Accordion>
      {/* Question 6 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
          className="panel-header"
        >
          <h4 component="span">Are collabs allowed?</h4>
        </AccordionSummary>
        <AccordionDetails id="panel6-content">
        Collabs are highly encouraged. The more artists, the better!
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Faq;
