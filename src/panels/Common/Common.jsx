import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import {
  Avatar,
  Button,
  Card,
  Cell,
  Div,
  Group,
  Header,
  Headline,
  Panel,
  PanelHeader,
  Separator,
  SimpleCell, Spinner,
  Text,
  Subhead,
} from '@vkontakte/vkui';
import Icon16Market from '../../assets/Common/icon_market_16.svg';
import Icon16Coin from '../../assets/Common/icn_coin_16.svg';

import './common.css';
import BrainLeaderboard from './BrainLeaderboard';
import MyQuestionGallery from "./Components/MyQuestionGallery/MyQuestionGallery";

const Common = (props) => {
  const { id, setActivePanel } = props;
  const [quizCard, setquizCard] = useState({
    completed: false, date: '25 апреля', trueAnswers: 3, questionsCount: 5,
  });
  const [renderedFacts, setRenderedFacts] = useState([]);
  const [facts, setFacts] = useState([]);
  const [myQuestions, setMyQuestions] = useState([]);
  const [fetchedUser, setUser] = useState({
    first_name: 'Test',
    last_name: 'User',
    photo_200: 'https://sun9-51.userapi.com/c840222/v840222319/8a733/I7rD4NcI9N0.jpg?ava=1',
    BR: 62,
    coins: 2556,
  });
  const [userLeaderboardData, setUserLeaderboardData] = useState({
    worldPlace: 12803312,
    friendsPlace: 4,
  });

  // Начальный эффект, в котором нужно будет запросить у сервера пачку "вопрос-ответ"
  // и, возможно, другую информацию
  useEffect(() => {
    setFacts([
      {
        question: 'Какая птица не подкладывает свои яйца в чужие гнёзда?',
        answer: 'Золотистая ржанка',
      },
      {
        question: 'В каком из этих напитков, по мнению дегустаторов, преобладает оттенок корочки ржаного хлеба?',
        answer: 'В Токае',
      },
      {
        question: 'Из чьей шерсти первоначально делались камилавки: головные уборы византийских священников?',
        answer: 'Верблюд',
      },
    ]);
    setMyQuestions([
      {
        question: 'Какой из этих металлов вызывает лихорадку?',
        answers: ['1', '2', '3', '4'],
        cost: 32,
      },
      {
        question: 'Какой из этих металлов вызывает лихорадку? Какой из этих металлов вызывает лихорадку?',
        answers: ['1', '2', '3', '4'],
        cost: 32,
      },
      {
        question: 'Какой из этих металлов вызывает лихорадку?',
        answers: ['1', '2', '3', '4'],
        cost: 32,
      },
      {
        question: 'Какой из этих металлов вызывает лихорадку?',
        answers: ['1', '2', '3', '4'],
        cost: 32,
      },
    ]);
  }, []);

  useEffect(() => {
    const renderedItems = facts.map((item) => (
      <Cell key={item.question} description={item.answer} multiline>{item.question}</Cell>
    ));
    setRenderedFacts(renderedItems);
  }, [facts]);


  return (
    <Panel id={id} className="Common">
      <PanelHeader>
        Продлёнка
      </PanelHeader>

      {/* Quiz card */}
      <div>
        {quizCard && (
          <Div style={{ paddingBottom: 0 }}>
            <Card size="l">
              <Div
                className="Common--quizCard"
              >
{/*                <div
                  className="Common__iconQuiz"
                  style={{ backgroundImage: `url(${IconQuizCard})` }}
                />*/}
                {/*<img src={Icon16Coin} className="Common__iconQuiz" alt={'Icon coin'} />*/}
                <svg className="Common__iconQuiz" width="31px" height="21px" viewBox="0 0 21 21">
                  <defs>
                    <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="44.8671592%" id="radialGradient-1">
                      <stop stopColor="#FFD54F" offset="0%"></stop>
                      <stop stopColor="#FFA000" offset="100%"></stop>
                    </radialGradient>
                  </defs>
                  <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="QuizCard" transform="translate(-12.000000, -10.000000)">
                      <g id="icn32/coin" transform="translate(12.000000, 10.000000)">
                        <g id="icn32_quiz">
                          <circle id="Oval" stroke="#FFD54F" strokeWidth="2" fill="url(#radialGradient-1)" fillRule="nonzero" cx="10.5" cy="10.5" r="9.5"></circle>
                          <polygon id="Star" fill="#FFEBA9" points="10.5 13.7219587 6.97328849 15.354102 7.43573518 11.49564 4.7936609 8.64589803 8.60618019 7.89338065 10.5 4.5 12.3938198 7.89338065 16.2063391 8.64589803 13.5642648 11.49564 14.0267115 15.354102"></polygon>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                {(quizCard.completed && (
                  <Cell
                    multiline
                    description={
                      `Вы ответили на ${quizCard.trueAnswers} из ${quizCard.questionsCount} вопросов`
                    }
                  >
                    <Text>
                      Самостоялка (завершено)
                    </Text>
                  </Cell>
                ))}
                {(!quizCard.completed && (
                  <Cell
                    multiline
                    description={<div className={"Common--quizDescription"}>Пройдите самостоятельную работу, чтобы быстро получить монеты.</div>}
                    size="l"
                    bottomContent={(
                      <Button
                        mode="primary"
                        onClick={() => {
                          if (!quizCard.completed) setActivePanel('WorkPanel');
                        }}
                      >
                        Пройти сейчас
                      </Button>
                    )}
                  >
                    <Subhead weight={'regular'}>
                      {`Новая самостоялка`}
                    </Subhead>
                  </Cell>
                ))}

              </Div>
            </Card>
          </Div>
        )}
      </div>

      <Headline level={2} weight="semibold" className="Common--BrainHeader">Брейн-рейтинг</Headline>
      {fetchedUser && (
        <Group
          separator="hide"
          description={(
            <div>
              {`Вы на ${userLeaderboardData.worldPlace.toLocaleString()} месте в мире 
              и на ${userLeaderboardData.friendsPlace.toLocaleString()} месте среди друзей. Чтобы
              автоматически получать очки брейн-рейтинга, купите в магазине «Вопрос».`}
            </div>
          )}
          className="Common--user"
        >
          <SimpleCell
            disabled
            before={<Avatar src={fetchedUser.photo_200} />}
            indicator={<div>{`${fetchedUser.BR} BR`}</div>}
          >

            {`${fetchedUser.first_name} `}
            {' '}
            <b>{fetchedUser.last_name}</b>
          </SimpleCell>
        </Group>
      )}

      <Div className="Common--CustomQuestionBlock">
        <SimpleCell
          className="Common--ShopButton"
          disabled
          before={(
            <Button
              mode="commerce"
              // before={<img src={Icon16Market} alt={'Icon shop'} className="Common--ShopButton_icon" />}
              before={
                <svg className={'Common--ShopButton_icon'} width="14px" height="15px" viewBox="0 0 14 15">
                  <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Brain-Rating" transform="translate(-28.000000, -178.000000)">
                      <g id="btn_Shop">
                        <g transform="translate(15.000000, 171.000000)">
                          <g id="Button">
                            <g id="Centering" transform="translate(12.000000, 7.000000)">
                              <g id="Icons-16/market_16">
                                <g id="market_16">
                                  <rect fillRule="nonzero" x="0" y="0" width="16" height="16"></rect>
                                  <path d="M8,0 C10.209139,0 12,1.790861 12,4 L13.3975718,4 C13.954771,4 14.1568249,4.05801601 14.3605286,4.16695794 C14.5642323,4.27589987 14.7241001,4.43576773 14.8330421,4.63947144 C14.941984,4.84317514 15,5.04522904 15,5.60242825 L15,10.8336866 C15,12.2824045 14.8491584,12.8077446 14.5659094,13.3373743 C14.2826603,13.8670039 13.8670039,14.2826603 13.3373743,14.5659094 C12.8077446,14.8491584 12.2824045,15 10.8336866,15 L5.16631345,15 C3.7175955,15 3.19225536,14.8491584 2.66262573,14.5659094 C2.1329961,14.2826603 1.71733967,13.8670039 1.43409064,13.3373743 C1.15084162,12.8077446 1,12.2824045 1,10.8336866 L1,5.60242825 C1,5.04522904 1.05801601,4.84317514 1.16695794,4.63947144 C1.27589987,4.43576773 1.43576773,4.27589987 1.63947144,4.16695794 C1.84317514,4.05801601 2.04522904,4 2.60242825,4 L4,4 C4,1.790861 5.790861,0 8,0 Z M4.77147233,5.5 L4.72852767,5.5 C4.5644661,5.5 4.43845107,5.53016832 4.33252515,5.58681813 C4.22659922,5.64346793 4.14346793,5.72659922 4.08681813,5.83252515 C4.03016832,5.93845107 4,6.0644661 4,6.22852767 L4,6.22852767 L4,6.27147233 C4,6.4355339 4.03016832,6.56154893 4.08681813,6.66747485 C4.14346793,6.77340078 4.22659922,6.85653207 4.33252515,6.91318187 C4.43845107,6.96983168 4.5644661,7 4.72852767,7 L4.72852767,7 L4.77147233,7 C4.9355339,7 5.06154893,6.96983168 5.16747485,6.91318187 C5.27340078,6.85653207 5.35653207,6.77340078 5.41318187,6.66747485 C5.46983168,6.56154893 5.5,6.4355339 5.5,6.27147233 L5.5,6.27147233 L5.5,6.22852767 C5.5,6.0644661 5.46983168,5.93845107 5.41318187,5.83252515 C5.35653207,5.72659922 5.27340078,5.64346793 5.16747485,5.58681813 C5.06154893,5.53016832 4.9355339,5.5 4.77147233,5.5 L4.77147233,5.5 Z M11.2714723,5.5 L11.2285277,5.5 C11.0644661,5.5 10.9384511,5.53016832 10.8325251,5.58681813 C10.7265992,5.64346793 10.6434679,5.72659922 10.5868181,5.83252515 C10.5301683,5.93845107 10.5,6.0644661 10.5,6.22852767 L10.5,6.22852767 L10.5,6.27147233 C10.5,6.4355339 10.5301683,6.56154893 10.5868181,6.66747485 C10.6434679,6.77340078 10.7265992,6.85653207 10.8325251,6.91318187 C10.9384511,6.96983168 11.0644661,7 11.2285277,7 L11.2285277,7 L11.2714723,7 C11.4355339,7 11.5615489,6.96983168 11.6674749,6.91318187 C11.7734008,6.85653207 11.8565321,6.77340078 11.9131819,6.66747485 C11.9698317,6.56154893 12,6.4355339 12,6.27147233 L12,6.27147233 L12,6.22852767 C12,6.0644661 11.9698317,5.93845107 11.9131819,5.83252515 C11.8565321,5.72659922 11.7734008,5.64346793 11.6674749,5.58681813 C11.5615489,5.53016832 11.4355339,5.5 11.2714723,5.5 L11.2714723,5.5 Z M8,1.5 C6.61928813,1.5 5.5,2.61928813 5.5,4 L10.5,4 C10.5,2.61928813 9.38071187,1.5 8,1.5 Z" id="↳-Icon-Color" fill="#FFFFFF" fillRule="nonzero"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              }
            >
              МАГАЗИН
            </Button>
          )}
        >
          <div className="Common--ShopButton_textAfter">
            {`У вас ${fetchedUser.coins} монет`}
          </div>
        </SimpleCell>

      </Div>
      <Separator />

      <Group
        separator={'hide'}

        header={(
          <Header
            mode="secondary"
            aside={
              <Button mode="tertiary" className={'Common--button__showAllQuestions'}>Показать все</Button>}
          >
            мои вопросы
          </Header>
        )}
      >
        <MyQuestionGallery questions={myQuestions} />
      </Group>

      <Group
        style={{marginTop: '15px'}}
        separator={'hide'}
        header={(
          <Header
            mode="secondary"
          >
            таблица лидеров
          </Header>
        )}
      >
        <BrainLeaderboard />

      </Group>

{/*      <Div>
        <Headline level={2} weight="semibold">Интересные факты</Headline>
        {renderedFacts.length ? renderedFacts : <Spinner size="large" />}
      </Div>*/}

    </Panel>
  );
};

Common.propTypes = {
  id: PropTypes.string.isRequired,
  setActivePanel: PropTypes.func.isRequired,
};
Common.defaultProps = {};
export default Common;
