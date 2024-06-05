// src/components/IssueList.js
import React, { useEffect, useState } from 'react';
import { fetchIssues } from '../services/jiraService';

const IssueList = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getIssues = async () => {
      try {
        const issues = await fetchIssues();
        setIssues(issues);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getIssues();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching issues</div>;
  }

  return (
    <div>
      <h1>Jira Issues</h1>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>
            <h2>{issue.fields.summary}</h2>
            <p>{issue.fields.description}</p>
            <p>Status: {issue.fields.status.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssueList;
