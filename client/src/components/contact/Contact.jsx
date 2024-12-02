import React from "react";
import styles from './Contact.module.css';
import { getImageUrl } from "../../utils";
import { ProjectName } from "../../../public/js/currDate";

const Contact = ({ isSun, toggleTheme }) => {
    const bodyBackgroundColor = isSun ? 'black': 'white';
    document.body.style.backgroundColor = bodyBackgroundColor;

    const back_set = isSun ? styles.contact_us_form : styles.contact_us_form_sun;
    const label_set = isSun ? styles.label : styles.label_sun;
    const input_set = isSun ? styles.input_sun : styles.input;
    const middleHead = isSun ? styles.midhead_sun : styles.midhead;
      
    return(
        <>
        <div className={styles.Contact}>
            
                <div className={`${styles.intro_content} ${styles.cc_homepage}`}>
                    <div className={styles.intro_text}>
                        <div className={styles.heading_jumbo}>
                            CONTACT<br/>US
                        </div>
                        <div className={`${styles.paragraph_bigger} ${styles.cc_bigger_white_light}`}>
                            WE CAN HELP YOU WITH YOUR QUERIES, AND PROJECTS
                        </div>
                    </div>
                </div>
        </div>
        
        
        <div className={back_set}>
          <h1>Project Registration Form</h1>
          <div className={styles.project_info}>
          <form action="#" method="POST" className={styles.project_info}>
              <h2 className={middleHead}>Client Information</h2>
              <div className={styles.component}>
                  <label htmlFor="fullName" className={label_set}>Full Name:</label>
                  <input type="text" id="fullName" className={input_set} name="fullName" required />

                  <label htmlFor="phone" className={label_set}>Phone Number:</label>
                  <input type="text" id="phone" className={input_set} name="phone" required />

                  <label htmlFor="email" className={label_set}>Email ID:</label>
                  <input type="email" id="email" className={input_set} name="email" required />

                  <label htmlFor="idProof" className={label_set}>Identification Proof:</label>
                  <input type="file" id="idProof" name="idProof" className={styles.file} required />
              </div>
            

              <h2 className={middleHead}>Project Information</h2>
              <div className={styles.component}>
                <label for="projectType" className={label_set}>Project Type:</label>
                <input type="text" id="projectType" className={input_set} name="projectType" required />
                
                <label for="projectLocation" className={label_set}>Project Location:</label>
                <input type="text" id="projectLocation" className={input_set} name="projectLocation" required />
                
                <label for="landOwnershipDocs" className={label_set}>Land Ownership Documents:</label>
                <input type="text" id="landOwnershipDocs" className={input_set} name="landOwnershipDocs" required />
                
                <label for="projectScope" className={label_set}>Project Scope:</label>
                <textarea id="projectScope" className={input_set} name="projectScope" required></textarea>
                
                <label for="estimatedBudget" className={label_set}>Estimated Budget:</label>
                <input type="number" className={input_set} id="estimatedBudget" name="estimatedBudget" required />
              </div>

              <h2 className={middleHead}>Architectural Details</h2>
              <div className={styles.component}>
                <label for="architecturalPlans" className={label_set}>Architectural Plans:</label>
                <input type="file" id="architecturalPlans" className={`${input_set} ${styles.file}`} name="architecturalPlans" required />
                
                <label for="sitePlan" className={label_set}>Site Plan:</label>
                <input type="file" id="sitePlan" className={`${input_set} ${styles.file}`} name="sitePlan" required />
                
                <label for="structuralDesign" className={label_set}>Structural Design:</label>
                <input type="file" id="structuralDesign" className={`${input_set} ${styles.file}`} name="structuralDesign" required />
                
                <label for="materialSpecs" className={label_set}>Material Specifications:</label>
                <textarea id="materialSpecs" name="materialSpecs" className={input_set} required></textarea>
              </div>

              <h2 className={middleHead}>Legal and Regulatory Compliance</h2>
              <div className={styles.component}>
                <label for="permits" className={label_set}>Zoning and Land Use Permits:</label>
                <input type="file" id="permits" className={`${input_set} ${styles.file}`} name="permits" required />
                
                <label for="buildingPermits" className={label_set}>Building Permits:</label>
                <input type="file" id="buildingPermits" className={`${input_set} ${styles.file}`} name="buildingPermits" required />
                
                <label for="environmentalClearances" className={label_set}>Environmental Clearances:</label>
                <input type="file" id="environmentalClearances" className={`${input_set} ${styles.file}`} name="environmentalClearances" required />
                
                <label for="fireSafetyApprovals" className={label_set}>Fire Safety Approvals:</label>
                <input type="file" id="fireSafetyApprovals" className={`${input_set} ${styles.file}`} name="fireSafetyApprovals" required />
                
                <label for="utilityApprovals" className={label_set}>Utility Approvals:</label>
                <input type="file" id="utilityApprovals" className={`${input_set} ${styles.file}`} name="utilityApprovals" required />
                </div>

              <h2 className={middleHead}>Timeline and Milestones</h2>
              <div className={styles.component}>
                <label for="startDate" className={label_set}>Project Start Date:</label>
                <input type="date" id="startDate" className={input_set} name="startDate" required />
                
                <label for="completionDate" className={label_set}>Estimated Completion Date:</label>
                <input type="date" id="completionDate" className={input_set} name="completionDate" required />
                
                <label for="milestones" className={label_set}>Key Milestones and Deadlines:</label>
                <textarea id="milestones" className={input_set} name="milestones" required></textarea>
              </div>

              <h2 className={middleHead}>Financial Details</h2>
              <div className={styles.component}>
                <label for="paymentSchedule" className={label_set}>Payment Schedule:</label>
                <textarea id="paymentSchedule" className={input_set} name="paymentSchedule" required></textarea>
                
                <label for="costEstimates" className={label_set}>Cost Estimates:</label>
                <textarea id="costEstimates" className={input_set} name="costEstimates" required></textarea>
                
                <label for="fundingSources" className={label_set}>Funding Sources:</label>
                <textarea id="fundingSources" className={input_set} name="fundingSources" required></textarea>
              </div>

              <h2 className={middleHead}>Contractor and Vendor Information</h2>
              <div className={styles.component}>
                <label for="contractorDetails" className={label_set}>Contractor Details:</label>
                <textarea id="contractorDetails" className={input_set} name="contractorDetails" required></textarea>
                
                <label for="subcontractors" className={label_set}>Subcontractors and Vendors:</label>
                <textarea id="subcontractors" className={input_set} name="subcontractors" required></textarea>
                
                <label for="agreements" className={label_set}>Agreements and Contracts:</label>
                <input type="file" id="agreements" className={`${input_set} ${styles.file}`} name="agreements" required />
              </div>

              <h2 className={middleHead}>Insurance and Liability</h2>
              <div className={styles.component}>
                <label for="insuranceCoverage" className={label_set}>Insurance Coverage:</label>
                <textarea id="insuranceCoverage" className={input_set} name="insuranceCoverage" required></textarea>
                
                <label for="liabilityClauses" className={label_set}>Liability Clauses:</label>
                <textarea id="liabilityClauses" className={input_set} name="liabilityClauses" required></textarea>
              </div>

              <h2 className={middleHead}>Special Requirements</h2>
              <div className={styles.component}>
                <label for="sustainabilityGoals" className={label_set}>Sustainability Goals:</label>
                <textarea id="sustainabilityGoals" className={input_set} name="sustainabilityGoals"></textarea>
                
                <label for="accessibilityNeeds" className={label_set}>Accessibility Needs:</label>
                <textarea id="accessibilityNeeds" className={input_set} name="accessibilityNeeds"></textarea>
                
                <label for="aestheticPreferences" className={label_set}>Aesthetic Preferences:</label>
                <textarea id="aestheticPreferences" className={input_set} name="aestheticPreferences"></textarea>
              </div> 
              
              {/* <button type="submit" className={styles.submit}>Submit</button>
            </form> */}
                  {/* Submit Button */}
                  <button type="submit" className={styles.submit}>Submit</button>
              </form>
          </div>
        </div>
        </>
    )
}

export default Contact


