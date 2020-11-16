import React from 'react';

import { Cards, CountryPicker, Chart } from './components/index';
import { fetchData } from './api/';
import styles from './App.module.css';
import image from './images/covid-19-header.jpg';
import footer from './images/footer.jpg';


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
        <img className={styles.image} src={footer} alt="footer" />
      </div>
    );
  }
}

export default App;