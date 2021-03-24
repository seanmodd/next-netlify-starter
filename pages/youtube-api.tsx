import { Flex, Heading, Spacer } from '@chakra-ui/layout';
import React from 'react';
import unsplash from '../components/api/unsplash';
import Navbar from '../components/chakraPro/NavbarWithRightCta/Navbar';
import VideoList from '../components/udemy/VideoList';
import YouTubeSearch from '../components/udemy/YouTubeSearch';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <>
        <Navbar />
        App
        <YouTubeSearch onSubmit={this.onSearchSubmit} />
        <Flex
          alignItems="center"
          textAlign="center"
          justifyContent="center"
          mb={40}
          flexDirection="column"
        >
          <div align="center">Found: {this.state.images.length} images</div>
          <VideoList images={this.state.images} />
        </Flex>
      </>
    );
  }
}
export default App;