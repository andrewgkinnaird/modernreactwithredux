import React from 'react';
import ReactDOM from 'react-dom';
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail 
                    image={faker.image.avatar()} 
                    message="Nice blog post" 
                    timeAgo="Today at 4:45PM" 
                    author="Sam"
                />
            </ApprovalCard>
            

            <ApprovalCard>
                <CommentDetail 
                    image={faker.image.avatar()} 
                    message="Hi!" 
                    timeAgo="Today at 2:00AM" 
                    author="Alex"
                />
            </ApprovalCard>
            
            
            <ApprovalCard>
                <CommentDetail 
                    image={faker.image.avatar()} 
                    message="Konnichiwa" 
                    timeAgo="Yesterday at 7PM" 
                    author="Jane"
                />
            </ApprovalCard>
        </div>
        
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));