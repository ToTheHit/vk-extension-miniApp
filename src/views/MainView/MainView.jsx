import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ScreenSpinner, View, ConfigProvider } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import { useSelector } from 'react-redux';
import Main from '../../panels/Common/Main/Main';
import QuestionDetails from '../../panels/Common/QuestionDetails/QuestionDetails';
import EffectDetailsSelector from '../../panels/Common/EffectDetails/EffectDetailsSelector';

const MainView = (props) => {
  const { id, nextView, setActiveStory } = props;
  const [selectedQuestion, setSelectedQuestion] = useState({});
  const [activePanel, setActivePanel] = useState('Main');
  const [popoutMainView, setPopoutMainView] = useState(true);
  const [history, setHistory] = useState(['Main']);

  const scheme = useSelector((state) => state.schemeChanger.scheme);

  useEffect(() => {
    // setPopoutMainView(true);
  }, []);

  useEffect(() => {
    if (activePanel === 'Main') {
      setHistory(['Main']);
      bridge.send('VKWebAppDisableSwipeBack');
    } else {
      setHistory(((prevState) => [...prevState, activePanel]));
      bridge.send('VKWebAppEnableSwipeBack');
    }
  }, [activePanel]);


  const goBack = () => {
    const historyTemp = history;
    historyTemp.pop();
    setActivePanel(historyTemp[historyTemp.length - 1]);
  };

  return (
    <ConfigProvider
      webviewType="vkapps"
      scheme={(((scheme === 'light' || scheme === 'bright_light') || scheme === 'client_light') ? 'bright_light' : 'space_gray')}
    >
      <View
        activePanel={activePanel}
        id={id}
        popout={(popoutMainView && (<ScreenSpinner />))}
        onSwipeBack={goBack}
        history={history}
        modal={<EffectDetailsSelector />}
      >
        <Main
          id="Main"
          setActivePanel={setActivePanel}
          setSelectedQuestion={setSelectedQuestion}
          nextView={nextView}
          setActiveStory={setActiveStory}
          setPopoutMainView={setPopoutMainView}
          popoutMainView={popoutMainView}
        />
        <QuestionDetails
          id="QuestionDetails"
          setActivePanel={setActivePanel}
          selectedQuestion={selectedQuestion}
        />
      </View>
    </ConfigProvider>
  );
};

MainView.propTypes = {
  id: PropTypes.string.isRequired,
  nextView: PropTypes.func.isRequired,
  setActiveStory: PropTypes.func.isRequired,
};
MainView.defaultProps = {};
export default MainView;