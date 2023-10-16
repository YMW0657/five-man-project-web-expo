<template>
  <section class="page-section" id="about">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Report</h2>
        <h3 class="section-subheading text-muted">
          Fall victim to a scam? Report it to
        </h3>
      </div>
      <ul class="timeline">
        <li>
          <div class="timeline-image">
            <img
              class="rounded-circle img-fluid"
              src="@/assets/img/police.png"
              alt="..."
            />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="h4" @click="jumpTo('https://www.police.vic.gov.au/')">Victoria Police</h4>
              <h4 class="subheading">Phone:000</h4>
            </div>
            <div class="timeline-body">
              <p class="text-muted">
                Victoria Police is the law enforcement agency for the state of Victoria, Australia. It is responsible for general policing services like crime prevention, investigation, and public safety, as well as specialized units to handle issues such as fraud and cybercrime
              </p>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-image">
            <img
              class="rounded-circle img-fluid"
              src="@/assets/img/Scamwatch.png"
              alt="..."
            />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="h4" @click="jumpTo('https://www.scamwatch.gov.au/report-a-scam')">Scam Watch</h4>
              <h4 class="subheading">Phone:1800 595 160</h4>
            </div>
            <div class="timeline-body">
              <p class="text-muted">
                Scam watch is a website run by the Australian Competition and Consumer Commission (ACCC) to help people recognize, avoid, and report scams.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div class="timeline-image">
            <img
              class="rounded-circle img-fluid"
              src="@/assets/img/ACSC.png"
              alt="..."
            />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="h4" @click="jumpTo('https://www.cyber.gov.au/report-and-recover/report')">Australian Cyber Security Centre</h4>
              <h4 class="subheading">Phone:1300 292 371</h4>
            </div>
            <div class="timeline-body">
              <p class="text-muted">
                the Australian Cyber Security Centre (ACSC) is a government initiative focused on enhancing Australia's cybersecurity. The site serves as a resource for cybersecurity guidance and offers a platform for reporting cyber incidents, including cyber fraud and hacking
              </p>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-image">
            <img
              class="rounded-circle img-fluid"
              src="@/assets/img/IDCare.png"
              alt="..."
            />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="h4" @click="jumpTo('https://www.idcare.org/')">ID Care</h4>
              <h4 class="subheading">Phone:1800 595 160</h4>
            </div>
            <div class="timeline-body">
              <p class="text-muted">
                IDCare is an Australian non-profit organization specializing in identity theft and cyber-related issues. They offer free support and practical guidance to individuals who have been victims of identity theft or other forms of cybercrime
              </p>
            </div>
          </div>
        </li>
        <!-- <li class="timeline-inverted">
          <div class="timeline-image">
            <h4>
              Be Part
              <br />
              Of Our
              <br />
              Story!
            </h4>
          </div>
        </li> -->
      </ul>
    </div>
  </section>
</template>
<script setup>
  const jumpTo = (url)=>{
    window.location.href=url
  }
</script>
<style>
ul.timeline .timeline-heading h4.h4{
  cursor: pointer;
  text-decoration: underline;
}
ul.timeline .timeline-heading h4.h4:hover{
  color: #fbce2f;
  text-decoration: underline;
}
ul.timeline > li .timeline-image{
  background-color: #fff;
}
</style>