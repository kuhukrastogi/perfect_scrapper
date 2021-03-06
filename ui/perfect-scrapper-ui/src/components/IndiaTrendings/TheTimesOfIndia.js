import React, { Component } from 'react'
import CardList from '../CardList';
import {repository} from '../../Actions/Actions'

const TRENDIND_URL = '';
const TOTAL = 9;
const NEWS_API_KEY = 'b4ad1383874c4e229d295170f07f3d33';
const SOURCE = 'the-times-of-india';

export default class TheTimesOfIndia extends Component {

  state = {
    theTOIData: [],
    toiStateData: [],
  }

  componentDidMount() {
    fetch(`https://newsapi.org/v2/top-headlines?sources=${SOURCE}&apiKey=${NEWS_API_KEY}`)
      .then(response => response.json())
      .then(({articles}) => {
        this.setTOIData(articles);
      });
  }

  setTOIData = (articles) => {
    var theTOIData = [];
        
    for( let i=0; i<TOTAL; i++ ) {
      if(articles && articles.length>5) {
        theTOIData.push({
          header: 'Author: ' + (articles[i] || 'TOI'),
          title: 'Title: ' + articles[i].title,
          url: articles[i].url,
          imgUrl : articles[i].urlToImage,
          description: 'Description: ' + articles[i].description,
        })
      }
    }
    repository.theTOIData = theTOIData;
    this.setState({theTOIData})
  }

  render() {
    return (
      <div>
        <CardList sectionName="The Times of India" data={this.state.theTOIData} url={TRENDIND_URL}>
        </CardList>
      </div>
    )
  }
}
