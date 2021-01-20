
class NavBar extends React.Component {
    render () {
        return (
            <div id="NavBar">
                    <h1>Dashboard</h1>
                    <h1>Widget</h1>
                    <h1>Reviews</h1>
                    <h1>Customers</h1>
                    <h1>Online Analysis</h1>
                    <h1>Settings</h1>
                </div>
        )
    }
}
class Reviews extends React.Component {
    render () {
        return (
            <div id="Reviews">
                <h1>Yelp Reviews</h1>
                <h2>1,281</h2>
            </div>
        )
    }
}

class Average_Rating extends React.Component {
    render () {
        return (
            <div id="Average_Rating">
                <h1>Average Rating</h1>
                <h2>5</h2>
            </div>
        )
    }
}

class Sentiment_Analysis extends React.Component {
    render () {
        return (
            <div id="Sentiment_Analysis">
                <h1>Sentiment Analysis</h1>
                <h3>382</h3>
                <h3>930</h3>
                <h3>790</h3>
            </div>
        )
    }
}

class Site_Visitors extends React.Component {
    render () {
        return (
            <div id="Site_Visitors">
                <h1>Site Visitors</h1>
                <h4>90</h4>
                <div id="Nested_Box"></div>
            </div>
        )
    }
}

ReactDOM.render(
    <div id="Container">
        <NavBar/>
        <Reviews/>
        <Average_Rating/>
        <Sentiment_Analysis/>
        <Site_Visitors/>
    </div>,



   
   document.querySelector('main')
)