import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer'
import styles from './basic_info_styling.module.css'

function BasicInfoContainer() {
    return (

        <React.Fragment>
        <Navbar />

        <div className={styles.container}>


            <div className={styles.content}>
                
                <div>
                    <img className={styles.img} src={process.env.PUBLIC_URL + '/OG.png'} alt="your humble web developer" />
                </div>

                <div className={styles.container_two}>

                <p>I’m a QA Engineer with 4+ years of experience working with Electronic Health Records. I’ve formulated three pillars for the Enterprising QA Engineer (the EQAE!) to lean on:</p>
                
                <div>
                    <h3 className={styles.row_one}>Be a subject matter expert</h3>
                    <p className={styles.row_two}>
                        Comprehensive knowledge is the bedrock of comprehensive testing, especially for an EHR. The EQAE has a thorough understanding of their product as a whole, a mastery of their functional areas in particular, and a deep appreciation for all the interactions and interplay in between the two.
                    </p>
                </div>

                <div>
                    <h3 className={styles.row_three}>Mind the code</h3>
                    <p className={styles.row_four}>
                        For truly effective QA a deep understanding of the surface area of the product isn’t quite sufficient; the EQAE takes care to check under the hood whenever needed to make sure everything looks a-okay. While they may not regularly push code, the EQAE digs into it on a daily basis: scanning over diffs to get a sense of scope, locating exactly where a bug is occurring from stacktraces in logs, and looking up files to get a better sense of the underlying logic behind why something is (or isn’t) happening, just to list a few examples. This also means leveraging an array of tools (Postman, Swagger, Splunk, Bugsnag, to name a few) to inform their testing, investigate bugs, simulate workflows, or otherwise address the issue at hand.
                    </p>
                </div>

                <div>
                    <h3 className={styles.row_five}>Try new things</h3>
                    <p className={styles.row_six}>
                        The EQAE, through working in collaborative, cross-functional teams, wears multiple hats and continuously gains new skills. The fluid skills and expertise of the EQAE can be applied to address problems throughout their company, and the EQAE should welcome the opportunity to do so. This is even more important in the world of EHRs, where the EQAE is an indispensable part in coming up with creative solutions to new problems posed by an ever changing medical landscape, and help guarantee that our software is helping guarantee every patient is getting the highest level of care and support.
                    </p>
                </div>

                
            </div>

            </div>
        </div>
        
        <Footer />
        </React.Fragment>
    );
}

export default BasicInfoContainer;