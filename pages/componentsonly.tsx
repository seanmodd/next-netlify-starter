import { useState, useEffect } from 'react';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import { Flex, Heading, VStack } from '@chakra-ui/layout';
import { css, jsx } from '@emotion/react';
import Tasks from '../components/traversy/Tasks';
import FormButton from '../components/traversy/FormButton';
import Navbar from '../components/chakraPro/NavbarWithRightCta/Navbar';
import { MyFlex } from '../components/traversy/Styled';

const SideFlex = ({ children }) => (
  <>
    <MyFlex
      alignItems="center"
      justifyContent="center"
      bg={mode('gray.50', 'gray.800')}
      pb="50px"
    >
      {children}
    </MyFlex>
  </>
);

const pressedStyle = {
  width: 'auto',
  transition: 'all 0.5s ease-out',
  textShadow: '3px 3px #f2ff00',
};

const SideHeading = ({ children }) => (
  <>
    <Heading
      textShadow="3px 3px #ff00ae"
      fontSize={['40px', '50px', '60px', '70px']}
      _hover={pressedStyle}
    >
      {children}
    </Heading>
  </>
);

const OtherSideHeading = ({ children }) => (
  <>
    <Heading
      color={mode('gray.900', 'gray.50')}
      fontSize={{ base: '25px', md: '30px', lg: '35px' }}
      fontWeight="200"
      mt="100px"
    >
      {children}
    </Heading>
  </>
);

function App() {
  const [tasksList, setTasksList] = useState([
    {
      id: 1,
      text: 'Doctors',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Teachers',
      day: 'Mar 5th at 2:30pm',
      reminder: false,
    },
    {
      id: 3,
      text: 'Warriors',
      day: 'Apr 5th at 2:30pm',
      reminder: true,
    },
  ]);
  // state toggles for showing and hiding the form
  const [showForm, setShowForm] = useState(false);
  // delete tasks

  // adding new form items

  // toggle reminder

  // The Actual Components:

  return (
    <>
      <Navbar />
      <SideFlex>
        <VStack>
          <OtherSideHeading>Welcome to...</OtherSideHeading>
          <SideHeading>The Task Tracker App</SideHeading>
          <FormButton />
          {tasksList.length > 0 ? (
            <Tasks tasks={tasksList} />
          ) : (
            <Heading fontSize={80} textColor="red.500">
              No tasks to show!
            </Heading>
          )}
        </VStack>
      </SideFlex>
    </>
  );
}

export default App;
