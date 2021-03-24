import { Button } from '@chakra-ui/button';
import { FormControl } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Flex, Heading, Stack } from '@chakra-ui/layout';
import React from 'react';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';

const hoverStyle = {
  boxShadow: '7px 7px 7px 7px  rgba(223, 3, 172, 0.2)',
  textShadow: '1px 1px #ff0000',
  transition: 'all .2s ease-out',
  background: '#62ff00',
  color: 'black',
  fontWeight: '400',
};
const buttonStyle = {
  background: '#0d00ff',
  color: '#ffff00',
  transition: 'all 0.6s ease-out',
  textShadow: '6px 6px #ff00ae',
  fontWeight: '400',
};

class YouTubeSearch extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <>
        <form onSubmit={this.onFormSubmit} align="center">
          <Input
            color="pink.500"
            variant="outline"
            placeholder="Search for images..."
            value={this.state.term}
            onChange={(e) =>
              this.setState({ term: e.target.value.toLowerCase() })
            }
          />
          <Button
            transition="0.1s"
            boxShadow="3px 3px 3px 3px rgba(0, 0, 255, 0.2)"
            background="blue"
            color="white"
            my={10}
            _hover={hoverStyle}
            _active={buttonStyle}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </>
    );
  }
}
export default YouTubeSearch;
