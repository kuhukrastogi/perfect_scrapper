import React, { Component } from 'react'
import CardList from '../CardList';
import {repository} from '../../Actions/Actions'

const TRENDIND_URL = '';
const TOTAL = 9;
const NEWS_API_KEY = 'b4ad1383874c4e229d295170f07f3d33';
const SOURCE = 'the-washington-post';

export default class TheWashingtonPost extends Component {

  state = {
    theWashingtonData: []
  }

  componentDidMount() {
    fetch(`https://newsapi.org/v2/top-headlines?sources=${SOURCE}&apiKey=${NEWS_API_KEY}`)
      .then(response => response.json())
      .then(({articles}) => {
        this.setWashingTonData(articles);
      });
  }

  setWashingTonData = (articles) => {
    var theWashingtonData = [];

    for( let i=0; i<TOTAL; i++ ) {

      //let description = githubData[i].description.length>21 ? githubData[i].description.substring(0,25) : githubData[i].description;

      theWashingtonData.push({
        header: 'Author: ' + (articles[i].author || 'The Washington Post'),
        title: 'Title: ' + articles[i].title,
        url: articles[i].url,
        imgUrl : articles[i].urlToImage,
        description: 'Description: ' + articles[i].description,
      })
    }
    repository.washingtonData = theWashingtonData;
    this.setState({theWashingtonData})
  }

  render() {
    return (
      <div>
        <CardList sectionName="The Washington Post" data={this.state.theWashingtonData} url={TRENDIND_URL}>
        </CardList>
      </div>
    )
  }
}
