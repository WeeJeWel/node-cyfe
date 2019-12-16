'use strict';

const fetch = require('node-fetch');

module.exports = class Cyfe {

  // Push data
  async push({
    id,
    data,
    onduplicate,
    color,
    type,
    cumulative,
    average,
    total,
    comparison,
    reverse,
    reversegraph,
    yaxis,
    yaxismin,
    yaxismax,
    yaxisshow,
    labelshow,
  }) {
    const res = await fetch(`https://app.cyfe.com/api/push/${id}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data,
        onduplicate,
        color,
        type,
        cumulative,
        average,
        total,
        comparison,
        reverse,
        reversegraph,
        yaxis,
        yaxismin,
        yaxismax,
        yaxisshow,
        labelshow,
      }),
    });
    const json = await res.json().catch(e => null);
    if( !res.ok )
      throw new Error((json && json.message) || res.statusText);
    
    return json;
  }
  
  // Increment any counter
  async pushIncrement({ id, key, increment = 1 }) {
    if(!key)
      throw new Error('Missing: key');
    
    return this.push({
      id,
      data: [{
        'Date': this.constructor.getDate(),
        [key]: increment,
      }],
    });
  }
  
  // returns date in YYYYMMDD
  static getDate( d = new Date() ) {
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    let year = d.getFullYear();

    if(month.length < 2) 
      month = '0' + month;
        
    if(day.length < 2) 
      day = '0' + day;

    return `${year}${month}${day}`;
  }
  
}