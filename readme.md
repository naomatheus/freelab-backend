# Backend Freelab  React app Readme

## Auth 

- POST /user/register
-- Creates a new user
-- Expects Parameters 
1. username 
2. password 
3. zipCode 
4. skill 
5. industry 
6. email 	(optional)
7. userPrefs (optional)
8. statements (optional)

## User 

- GET /user/{id}/{Step}
-- Gets a resource in order

- PATCH /user/{id}/{Step}/edit
-- Edits a resource in order
-- Expects Parameters 
1. username 
2. password (optional)
3. zipCode (optional)
4. skill (optional)
5. industry (optional)
6. email (optional)
7. userPrefs (optional)
8. statements (optional)

- DELETE /user/{id}/
-- Deletes a user
-- Expects Parameters
1. username
2. password 

## Login 

- GET /login
-- Gets a resource 

## API - github jobs

- GET /user/{Step}/githubJobs
-- Gets a list of jobs from gitHub Jobs list

- DELETE /user/{Step}/githubJobs/edit
-- Hides a job from gitHub jobs list

## Brand Statements

- GET /user/{Step}/brandStatements
-- Gets a resource's appended notes in order

- POST /user/{Step}/brandStatements/add
-- Creates an appended note on a resource
-- Expects Parameters:
1. date
2. body


Remember. githubJobs is two words  

Remember checklistNotes is two words
