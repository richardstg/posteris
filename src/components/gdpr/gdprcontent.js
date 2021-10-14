import React from "react"
import { Container, Row, Col } from "reactstrap"

import classes from "./gdprcontent.module.scss"
import Logo from "../shared/image/logoWhite"

const GdprContent = () => {
  return (
    <div id="gdpr" className={classes.outerWrapper}>
      <div className={classes.backgroundImage}></div>
      <div className={classes.overLay}></div>
      <div className={classes.noise}></div>
      <Container className={classes.header}>
        <div className={classes.logo}>
          <Logo />
        </div>
      </Container>
      <Container className={classes.innerWrapper}>
        <Row>
          <Col xl={{ size: 10, offset: 1 }}>
            <h1 className={classes.firstHeader}>PRIVACY POLICY</h1>
            <h2 className={classes.secondHeader}>
              About Posteris AB and this privacy policy
            </h2>
            <p className={classes.text}>
              Posteris AB, Reg. No. 559237-9415, Lillängsgatan 24, 168 58
              Bromma, Sweden (“Posteris”, “we” or “us”) offers organisational
              and operational advisory services to companies, aiming to help you
              manage and improve your corporate and human capital in an
              innovative manner.
            </p>
            <p className={classes.text}>
              As part of our business, Posteris processes personal data for
              which Posteris is the data controller. This means that Posteris is
              responsible for ensuring that the processing of personal data is
              carried out in accordance with applicable law and this privacy
              policy. We take all necessary measures to make sure that your
              personal data are being processed by us in a lawful, fair and
              transparent manner.
            </p>
            <p className={classes.text}>
              It is important to us that you feel comfortable with how we
              process your personal data. This privacy policy covers all
              necessary information about our personal data processing and it is
              important that you read and understand this privacy policy before
              you use any of our services. You should not use any of our
              services if you do not approve of this privacy policy. Should you
              have any questions regarding our processing of your personal data,
              please contact us by using the contact details below.
            </p>
            <p className={classes.text}>
              Please note that our website may contain links to websites
              provided by third parties. These websites have their own privacy
              policies and Posteris is not responsible for their business or
              their information policies. We recommend users who submit
              information to or through these third-party websites to review the
              privacy policies on these websites before submitting any personal
              data to them.
            </p>
            <p className={classes.text}>
              For the collection, processing and retention of information
              collected via cookies, please refer to our cookie policy.
            </p>
            <h2 className={classes.secondHeader}>
              What personal data do we collect and where from?
            </h2>
            <p className={classes.text}>
              The types of personal data that we collect may, depending on the
              context, include:
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  name and contact information including address, personal
                  identity number, mobile number and e-mail address;
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>job title;</p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  job application documents such as resumé and cover letter,
                  including, but not limited to, photo, experience, skills,
                  assessed strengths and weaknesses as well as work duties;
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  the results of aptitude and motivation tests;
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  credit reports, salary statement and insurance details;
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  references and performance appraisal, including your
                  development plan;
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  purchase, payment and order history;
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>IP address;</p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  other information that is relevant for customer surveys,
                  advertisements/marketing or offers; and/or
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  other user-generated content purposely provided by you via our
                  website or in connection to our communication with you.
                </p>
              </li>
            </ul>
            <p className={classes.text}>
              We may collect your personal data from the following sources:
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  Posteris’ website, e.g. when you subscribe to our newsletter
                  or submit a job application;
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  when you contact us by e-mail or phone;
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  by way of agreement, invoice or other business contact, if you
                  are a customer or a contact person for any of our business
                  partners; and/or
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  from third parties in the form of social media, public
                  records, any of our business partners or in connection with
                  communication with references provided by you.
                </p>
              </li>
            </ul>
            <h2 className={classes.secondHeader}>
              Why do we process your personal data?
            </h2>
            <p className={classes.text}>
              Posteris may use your personal data for the following purposes and
              based on the following legal grounds:
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <h3 className={classes.thirdHeader}>
                  Performance of a contract
                </h3>
                <ul className={classes.list}>
                  <li className={classes.listItem}>
                    <p className={classes.text}>
                      For the handling and administration of purchases and
                      payments.
                    </p>
                  </li>
                  <li className={classes.listItem}>
                    <p className={classes.text}>To offer order history.</p>
                  </li>
                  <li className={classes.listItem}>
                    <p className={classes.text}>
                      To carry out recruitment processes.
                    </p>
                  </li>
                  <li className={classes.listItem}>
                    <p className={classes.text}>
                      For organisational capital advisory services such as
                      leadership development, talent management, evaluations of
                      teams, individual employees and companies as well as
                      organisational analyses.
                    </p>
                  </li>
                  <li className={classes.listItem}>
                    <p className={classes.text}>
                      To make payments as well as to give you access to our
                      services. Your personal data may also be used at the
                      request of payment processing companies and credit
                      companies in relation to purchases where it is necessary
                      to carry out credit information checks.
                    </p>
                  </li>
                  <li className={classes.listItem}>
                    <p className={classes.text}>
                      For the administration of supply agreements and agreements
                      with our business partners.
                    </p>
                  </li>
                </ul>
              </li>
              <li className={classes.listItem}>
                <h3 className={classes.thirdHeader}>
                  Compliance with a legal obligation
                </h3>
                <ul className={classes.list}>
                  <li className={classes.listItem}>
                    <p className={classes.text}>
                      We save invoice documentation and recruitment
                      documentation in accordance with applicable accounting
                      laws and regulations.
                    </p>
                  </li>
                </ul>
              </li>
              <li className={classes.listItem}>
                <h3 className={classes.thirdHeader}>Legitimate interests</h3>
                <ul className={classes.list}>
                  <li className={classes.listItem}>
                    <p className={classes.text}>
                      In order for us to be able to communicate with you by
                      e-mail, and to handle any business transactions made by a
                      company’s contact person on behalf of the company, we
                      process the contact person’s personal data.
                    </p>
                  </li>
                  <li className={classes.listItem}>
                    <p className={classes.text}>
                      To build and improve business relationships with both
                      existing and potential customers and business partners.
                    </p>
                  </li>
                  <li className={classes.listItem}>
                    <p className={classes.text}>
                      To approach potential candidates by means of, e.g.
                      candidate sourcing, headhunting or other equivalent
                      activities.
                    </p>
                  </li>
                  <li className={classes.listItem}>
                    <p className={classes.text}>
                      In order for us to be able to provide and improve our
                      services, we process personal data also in other
                      circumstances. For example, we analyse customers’
                      purchasing habits for the purpose of providing existing
                      and potential customers with relevant information and
                      marketing as well as for the purpose of statistics and
                      business and method development.
                    </p>
                  </li>
                </ul>
              </li>
              <li className={classes.listItem}>
                <h3 className={classes.thirdHeader}>Consent</h3>
                <ul className={classes.list}>
                  <li className={classes.listItem}>
                    <p className={classes.text}>
                      To provide you with direct marketing and to perform
                      customer surveys.
                    </p>
                  </li>
                  <li className={classes.listItem}>
                    <p className={classes.text}>
                      To continue retaining personal data collected by Posteris
                      during candidate sourcing, headhunting and other
                      equivalent activities.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
            <h2 className={classes.secondHeader}>Retention of personal data</h2>
            <p className={classes.text}>
              Posteris takes all reasonable steps to ensure that your personal
              data is processed and stored securely. Your personal data will
              never be stored longer than permitted by applicable law or longer
              than necessary to fulfil the above stated purposes. Your personal
              data will be processed by us during the following time periods,
              after which they will be deleted:
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  <span className={classes.bold}>
                    Customer and contact person for a company:
                  </span>{" "}
                  Your personal data are saved for as long as you are an
                  appointed contact person for a company doing business with
                  Posteris. Your personal data will be saved until you request
                  that they are deleted, but no longer than two (2) years after
                  you last purchase, unless we must retain your personal data
                  for any reason listed in the below bullet points.
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  <span className={classes.bold}>Performance of contract:</span>{" "}
                  Personal data (name, personal identity number (if you are a
                  candidate or run a sole proprietorship), address, telephone
                  number, e-mail, billing and delivery information) which is
                  submitted to Posteris in connection with the order of products
                  or services are stored for as long as necessary in order for
                  Posteris’, or any of our business partners’, performance of
                  the contract with you.
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  <span className={classes.bold}>Communication:</span> If you
                  are in contact with Posteris by, for example, e-mail, your
                  personal data are saved for as long as it is necessary for us
                  to answer your question and complete any follow-up inquiries.
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  <span className={classes.bold}>Job applicants:</span> Posteris
                  saves your application documentation, including your resumé,
                  cover letter and photo, as applicable, during the recruitment
                  process and for a following period of two (2) years, in order
                  for us to defend potential legal claims.
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  <span className={classes.bold}>Candidates:</span> Posteris
                  saves your personal data collected in connection with
                  candidate sourcing, headhunting or other equivalent activities
                  for a period of six (6) months, in order to find suitable work
                  and initiate recruitment processes. Should you consent to it,
                  your personal data may be retained for a maximum period of two
                  (2) years.
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  <span className={classes.bold}>Legal obligation:</span>{" "}
                  Posteris saves any documentation that constitutes accounting
                  information in accordance with applicable accounting
                  legislation.
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  <span className={classes.bold}>Consent:</span> In the event
                  that we process your personal data based on your consent, we
                  only save your personal data for as long as we still have your
                  consent.
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  <span className={classes.bold}>Direct marketing:</span> We may
                  process your personal data for direct marketing purposes for
                  up to two (2) years after our business relationship has ended,
                  provided that you do not object to your personal data being
                  processed for direct marketing purposes. Personal data that
                  has been obtained from public sources for direct marketing
                  purposes are, however, deleted as soon as the direct marketing
                  for which the personal data were collected has been
                  communicated.
                </p>
              </li>
            </ul>
            <h2 className={classes.secondHeader}>Transfer of personal data</h2>
            <p className={classes.text}>
              Posteris always observe great caution when transferring your
              personal data and your personal data is only transferred in
              accordance with this privacy policy and after taking appropriate
              security measures. We do not sell personal data to third parties.
              Posteris may transfer your personal data in the following
              situations:
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  <span className={classes.bold}>Business partners:</span> Some
                  of our business partners, e.g. suppliers of aptitude and
                  motivation tests, suppliers of operations support systems or
                  customers receiving information about candidates, may be
                  granted access to the personal data that is necessary for them
                  to fulfil their obligations but are strictly prohibited to use
                  your personal data for other purposes. Access will also be
                  granted in circumstances where your personal data is necessary
                  for the performance of our collaboration with the business
                  partners in question.
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  <span className={classes.bold}> Business transactions:</span>{" "}
                  If all or part of Posteris’ operations is sold or integrated
                  with any other business, operation or company, your personal
                  data may be disclosed to our advisors, potential buyers and
                  their advisors, and be transferred to the new owners of the
                  operation.
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  <span className={classes.bold}>Legal obligations:</span> Your
                  personal data may also be disclosed for the purpose of
                  Posteris’ compliance with certain legal obligations and it may
                  be transferred to relevant public authorities when permitted
                  and required by law.
                </p>
              </li>
            </ul>
            <p className={classes.text}>
              The type of transfers mentioned above may be carried out to
              companies within the EU/EEA as well as to third countries whose
              data protection laws may differ from the level of protection
              within the EU/EEA. When transfers to third countries are carried
              out, Posteris takes all appropriate measures to ensure that your
              personal data are adequately protected and that all processing is
              performed in accordance with this privacy policy. Posteris will
              ensure that at least one of the following conditions are fulfilled
              in relation to each of those transfers:
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  the receiving country ensures an adequate level of protection;
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  Posteris has collected your consent prior to the transfer;
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  an agreement including certain standard contractual clauses
                  issued by the European Commission (e.g. 2021/914/EU) have been
                  entered into between Posteris and the recipient, without any
                  conflicting changes or amendments; or
                </p>
              </li>
              <li className={classes.listItem}>
                <p className={classes.text}>
                  the recipient has adopted binding corporate rules for the
                  processing which have been approved by the relevant
                  supervisory authority.
                </p>
              </li>
            </ul>
            <p className={classes.text}>
              You have the right to obtain a copy of the safeguards that we use
              when transferring personal data to a country outside of the EU/EEA
              by contacting Posteris.
            </p>
            <h2 className={classes.secondHeader}>Withdrawal of consent</h2>
            <p className={classes.text}>
              In the event that we process your personal data based on your
              consent, it is important that you are aware of your right to
              withdraw your consent at any time. You may withdraw your consent
              by contacting us on the contact details provided below. Such
              withdrawal may be made in whole or in part. If you do not wish to
              receive advertisements and marketing offers from us, you can
              withdraw your consent by contacting customer service or, as
              regards direct marketing via e-mail, by following the link in our
              marketing e-mails.
            </p>
            <h2 className={classes.secondHeader}>Your rights</h2>
            <p className={classes.text}>
              You have the right to request information about what personal data
              concerning you that we are processing and how it is being used by
              contacting us in writing (see contact details below). You also
              have the right to request correction of incorrect, incomplete or
              ambiguous personal data concerning you by contacting us. For the
              protection of your privacy and your personal data, we may require
              that you identify yourself in connection with our assistance.
            </p>
            <p className={classes.text}>
              In accordance with applicable data protection laws, you also have
              the right to request that your personal data be erased or that the
              processing of your personal data be restricted. In certain
              situations, you also have the right to object to the processing of
              your personal data and request that your personal data be
              transmitted in an electronic format.
            </p>
            <p className={classes.text}>
              You may file a complaint with the Swedish Data Protection
              Authority (Sw. Integritetsskyddsmyndigheten) if you believe that
              Posteris’ processing of your personal data is not carried out in
              accordance with applicable laws.
            </p>
            <h2 className={classes.secondHeader}>
              Changes to the privacy policy
            </h2>
            <p className={classes.text}>
              Please note that the terms of the privacy policy may be changed.
              Any new version will be published on Posteris’ website.
              Consequently, you should review these terms on a regular basis to
              make sure that you are satisfied with the changes. In case of any
              material changes we will, however, e-mail you, if you have given
              us your e-mail address, to make you aware of any changes made.
            </p>
            <p className={classes.text}>
              If the changes concern processing of personal data based on your
              consent, you will be given the opportunity to consent once again.
            </p>
            <h2 className={classes.secondHeader}>Contact us</h2>
            <p className={classes.text}>
              If you have any questions related to this privacy policy, if you
              suspect that a breach of this privacy policy has occurred, or if
              you would like to contact us for any reason stated in this privacy
              policy, please contact us using the contact details provided
              below.
            </p>
            <br />
            <div className={classes.contact}>
              <p className={classes.text}>
                <span className={classes.bold}>Posteris AB</span>
                <br />
                Lillängsgatan 24
                <br />
                168 58 Bromma
                <br />
                gdpr@posteris.se
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default GdprContent
