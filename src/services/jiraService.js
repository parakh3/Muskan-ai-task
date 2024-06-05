// src/services/jiraService.js
import axios from 'axios';
import { JIRA_EMAIL, JIRA_API_TOKEN, JIRA_PROJECT_KEY, JIRA_BASE_URL } from '../config';

const authHeader = `Basic ${btoa(`${JIRA_EMAIL}:${JIRA_API_TOKEN}`)}`;
console.log("authHeader",authHeader)
console.log(`${JIRA_BASE_URL}/rest/api/3/search?jql=project=${JIRA_PROJECT_KEY}`)


export const fetchIssues = async () => {
  try {
    const response = await axios.get(
      `${JIRA_BASE_URL}/rest/api/3/search?jql=project=${JIRA_PROJECT_KEY}`,
      {
        headers: {
          Authorization:authHeader,
          Accept: 'application/json',
          // 'X-Atlassian-Token':'no-check',
        },
      }
    );
    console.log("response is",response.data)
    return response.data.issues;
  } 
  catch (error) {
    console.error('Error fetching issues from Jira', error);
    throw error;
  }
};
