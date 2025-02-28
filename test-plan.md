                        Test Plan - User Registeration System

## Table of Contents
1. [Overview](#overview)
2. [Scope](#scope)
3. [Test Approach](#test-approach)
4. [Entry and Exit Criteria](#entry-and-exit-criteria)
5. [Risk and mitigation Plans](#risk-and-mitigation-plans)
6. [Assumptions](#assumptions)
7. [Test Environment](#test-environment)
8. [Defect Management](#defect-management)
9. [Test Scenarios](#test-scenarios)
10. [Test Timelines](#test-timelines)
11. [Test Deliverables](#test-deliverables)
12. [Roles and Responsibilities](#roles-and-responsibilities)
13. [Definition of Done](#definition-of-done)

## Overview
This test plan highlights the test strategy for the User Regisration System

## Scope
In Scope - <br />
The scope of testing includes the user registration system.

Out of Scope -  <br />
Any functional flow other than user registration system is out of scope.

## Test Approach
The project follows an agile methodology with frequent iterations. At the end of each iteration, the identified requirements are delivered to the team for testing. The testing process includes:

1. Functional Testing – Verifying that the application's features work as expected.
2. API Testing – Validating API responses to ensure they return the correct data and behavior.
3. Database Testing – Checking database entries to confirm accurate data storage and retrieval.
4. Automation Testing – Developing test scripts to automate repetitive test cases and improve efficiency.T

## Entry and Exit Criteria
Entry criteria – 
1. Requirements must be clearly defined and approved.
2. The test plan must be reviewed and approved.
3. Test cases should be created, reviewed, and approved.
4. Test data must be available and ready for execution.
5. The test environment should be set up with deployable and testable code.

Exit criteria – 
1. Execution and successful completion of all critical test cases.
2. Ensuring 100% test coverage for all in-scope requirements.
3. Retesting and resolving all blockers, critical, and major issues.
4. Preparing the test summary report and obtaining stakeholder approval.
5. Initiating automation for key features.

## Risk and Mitigation Plans
1. Application downtime due to deployment issues – Re-estimate the pending work based on the duration of unavailability.
2. Blockers or showstoppers preventing application functionality – Re-evaluate the workload based on the estimated fix time.
3. Functionality changes impacting existing tests – Rework test cases as needed to align with the updated functionality.
4. Feature inconsistencies between web and mobile – Reassess test coverage and adjust based on the required modifications.
5. Unexpected resource unavailability due to emergencies – Re-estimate the workload based on the available team capacity.

## Assumptions
At the time of drafting this test plan, the following assumptions were considered:
1. The test environment will be set up and ready for testing before the development cut-off.
2. The scope of functionality will remain unchanged throughout the test cycle.
3. Feature consistency will be maintained across Web, iOS, and Android platforms.
4. The number of QA resources will remain constant without fluctuations.
5. Teams will collaborate effectively to resolve blockers, ensuring uninterrupted QA progress.

## Test Environment
Testing will be conducted in the test environment across all three major platforms: Web, iOS, and Android.

## Defect Management
We will be using JIRA for defect management.

## Test Scenarios
1. Positive Scenarios

TC01 - Validate user registration process with a valid email address and a valid password
Expected - The user should receive email with account verification and then receive confirmation message on successfully registering an account.

TC02 - Validate the newly registered user is able to login and access the personalized features
Expected - The user should be able to login and access the application

TC03 - Validate the user registration flow with resend verification link Email
Expected - The user should receive another email for verifying the account

TC04 - Validate the data in the Database tables for the new registeration
Expected - The username and password (masked) should be stored appropriately in the database tables

TC05 - Validate the API response for user registration flow
Expected - The response should be 2XX and a valid Id should be returned in the response corresponding to the new user

2. Negative Scenarios
TC06 - Validate the error message on registering with an already registered email address
Expected - The user should not be able to register and a valid error message should be displayed

TC07 - Validate the error message on registering with an incorrect email address format
Expected - The user should not be able to register and a valid error message should be displayed

TC08 - Validate the error message on registering with a password that doesn't meet requirement
Expected - The user should not be able to register and a valid error message should be displayed

TC09 - Validate the error message on registering with blank email but correct password
Expected - The user should not be able to register and a valid error message should be displayed

TC10 - Validate the error message on registering with correct email address but blank password
Expected - The user should not be able to register and a valid error message should be displayed

TC11 - Validate the error message on registering with blank email address and blank password
Expected - The user should not be able to register and a valid error message should be displayed

TC12 - Validate error message on registering when server is down
Expected - The user should not be able to register and a valid error message should be displayed

TC13 - Validate the error message on trying to activate the account using an expired activation link
Expected - The user should see a valid error message

TC14 - Validate the error message on re-trying to activate the account using an used activation link
Expected - The user should see a valid error message

TC14 - Validate the error message on trying to login without activating the account
Expected - The user should see a valid error message


## Test Timelines
Testing will be conducted from March 3 to March 7, covering functional, API, and database testing to ensure end-to-end functionality is working as expected. After execution, we will provide stakeholders with an execution report. Once the feature is stable, we will begin writing automation scripts to cover all test scenarios.

## Test Deliverables
1. Test Plan
2. Test Cases
3. Requirement Tracebility Matrix
4. Bug Reports
5. Test Execution Report

## Roles and Responsibilities
QA Manager – Review the test strategy, define test scenarios, and oversee the execution process.
Tester 1 – Execute positive and negative test cases on the Web platform.
Tester 2 – Execute positive and negative test cases on the Android platform.
Tester 3 – Execute positive and negative test cases on the iOS platform.
Automation Engineer – Begin writing pseudocode for this functionality and integrate it into the test suite once the feature is stable.

## Definition of Done
1. All test cases have been executed.
2. All open bugs have been resolved and closed.
3. Documentation for the functionality has been added to Confluence for future reference.
4. Automation test development has been initiated.