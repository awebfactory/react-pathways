import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className = "container rp-page">
                <div className="page-header">
                    <h1>About react-starter</h1>
                </div>
                <p>You are presented with a matrix, and not a square one at that.</p>
                <p>You may find your own path via decision tree or by viewing available steps, basing yourself on your own goals.</p>
                <p>You may also follow paths already tried and true, suggested by other users.</p>
                <p>At all times you can see where you are, where you have come from, and where you are going, and you can share that information with others if you wish, as well as make suggestions yourself.</p>
                <p> Each step along the path you have chosen through the matrix (your course) constitutes a single complete self-contained learning experience (lesson). Or a set of associated, dependent steps. Each step or set of steps has its own page, with references, its own repo, proficiency quizzes, suggestions for exercises and for project based approaches to thoroughly mastering the step.
                </p>
            </div>
        );
    }
}

export default About;