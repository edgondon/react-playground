import React from 'react';

class Accordian extends React.Component {
    static defaultProps = { sections: [] };
    state = { currentTitleIndex: 0 };
    
    handleButtonClick(index) {
        this.setState({ currentTitleIndex: index })
    }
    

    renderButtons() {
        const currentTitle = this.props.sectionA[this.state.currentTitleIndex].title
        console.log(currentTitle)
        console.log(this.props.sectionA[0])
        
        return this.props.sectionA.map((section, index) => (
            
            <li key={index}>
                <button onClick={() => this.handleButtonClick(index)}>
                    {section.title}
                </button>
              {section.title === currentTitle ? this.renderContent() : null}
               
            </li>
        ))
    }
    renderContent() {
       
        
            return (<div className='content'>
                
                {this.props.sectionA[this.state.currentTitleIndex].content}
            </div>)

       
            
        }
    
    
    
    render() {
        

        
        
        return (
            <div>
                <ul>
                    {this.renderButtons()}
                    
                </ul>


            </div>
        )
        
    }
}

export default Accordian;