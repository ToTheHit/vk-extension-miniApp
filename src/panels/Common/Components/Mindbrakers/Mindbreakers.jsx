import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './mindbreakers.css';
import {
  Button, Caption,
  Card,
  classNames,
  Div,
  Group,
  Header,
  Placeholder,
  SimpleCell, Subhead,
  Text,
} from '@vkontakte/vkui';

import Icon28MarketOutline from '@vkontakte/icons/dist/28/market_outline';

const Mindbreakers = (props) => {
  const { data } = props;
  const [renderedCards, setRenderedCards] = useState([]);
  const [dailyTax, setDailyTax] = useState(72);
  const [dailyIncome, setDailyIncome] = useState(25);

  useEffect(() => {
    const rendered = data.map((item) => (
      <Card mode="outline" className="Mindbreakers--card" key={`Mindbreakers--card_${item.text}`}>
        <Div>
          <div
            className={
              classNames('Mindbreakers--card__header',
                { 'Mindbreakers--card__header-hot': item.isHot })
            }
          >
            {item.title}
          </div>
          <Text className="Mindbreakers--card__text">
            {item.text}
          </Text>

          <div className="Mindbreakers--card__footer">
            <Subhead weight={'medium'} className="Mindbreakers--card__footer-item">
              {`Рента — ${item.rent} BP`}
            </Subhead>
            <Caption level={'1'} weight={'regular'} className="Mindbreakers--card__footer-item">
              {`Налог: ${item.tax} M`}
            </Caption>
          </div>
        </Div>
      </Card>
    ));
    setRenderedCards(rendered);
  }, [data]);

  return (
    <Group
      className="Mindbreakers"
      header={(
        <Header
          aside={(
            <Button mode="tertiary" style={{ marginRight: '-12px', paddingRight: '12px' }}>
              Показать
              все
            </Button>
          )}
          indicator={12}
        >
          Мозголомки
        </Header>
      )}
      description={(renderedCards.length > 0
        && (
          <div>
            <Text className="Mindbreakers--description">
              {`Налог на все мозголомки составляет ${dailyTax} M в день.\nСредний доход в день — ${dailyIncome} BP.`}
{/*              {`Налог на все мозголомки составляет ${dailyTax} M в день.`}
              <br/>
              {`Средний доход в день — ${dailyIncome} BP.`}*/}
            </Text>
            <SimpleCell
              className="Mindbreakers--ShopButton"
              disabled
              before={(
                <Button
                  mode="commerce"
                  before={(
                    <div className="Mindbreakers--ShopButton_icon">
                      <svg width="14px" height="15px" viewBox="0 0 14 15">
                        <g
                          id="Symbols"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g id="Brain-Rating" transform="translate(-28.000000, -178.000000)">
                            <g id="btn_Shop">
                              <g transform="translate(15.000000, 171.000000)">
                                <g id="Button">
                                  <g id="Centering" transform="translate(12.000000, 7.000000)">
                                    <g id="Icons-16/market_16">
                                      <g id="market_16">
                                        <rect
                                          fillRule="nonzero"
                                          x="0"
                                          y="0"
                                          width="16"
                                          height="16"
                                        />
                                        <path
                                          d="M8,0 C10.209139,0 12,1.790861 12,4 L13.3975718,4 C13.954771,4 14.1568249,4.05801601 14.3605286,4.16695794 C14.5642323,4.27589987 14.7241001,4.43576773 14.8330421,4.63947144 C14.941984,4.84317514 15,5.04522904 15,5.60242825 L15,10.8336866 C15,12.2824045 14.8491584,12.8077446 14.5659094,13.3373743 C14.2826603,13.8670039 13.8670039,14.2826603 13.3373743,14.5659094 C12.8077446,14.8491584 12.2824045,15 10.8336866,15 L5.16631345,15 C3.7175955,15 3.19225536,14.8491584 2.66262573,14.5659094 C2.1329961,14.2826603 1.71733967,13.8670039 1.43409064,13.3373743 C1.15084162,12.8077446 1,12.2824045 1,10.8336866 L1,5.60242825 C1,5.04522904 1.05801601,4.84317514 1.16695794,4.63947144 C1.27589987,4.43576773 1.43576773,4.27589987 1.63947144,4.16695794 C1.84317514,4.05801601 2.04522904,4 2.60242825,4 L4,4 C4,1.790861 5.790861,0 8,0 Z M4.77147233,5.5 L4.72852767,5.5 C4.5644661,5.5 4.43845107,5.53016832 4.33252515,5.58681813 C4.22659922,5.64346793 4.14346793,5.72659922 4.08681813,5.83252515 C4.03016832,5.93845107 4,6.0644661 4,6.22852767 L4,6.22852767 L4,6.27147233 C4,6.4355339 4.03016832,6.56154893 4.08681813,6.66747485 C4.14346793,6.77340078 4.22659922,6.85653207 4.33252515,6.91318187 C4.43845107,6.96983168 4.5644661,7 4.72852767,7 L4.72852767,7 L4.77147233,7 C4.9355339,7 5.06154893,6.96983168 5.16747485,6.91318187 C5.27340078,6.85653207 5.35653207,6.77340078 5.41318187,6.66747485 C5.46983168,6.56154893 5.5,6.4355339 5.5,6.27147233 L5.5,6.27147233 L5.5,6.22852767 C5.5,6.0644661 5.46983168,5.93845107 5.41318187,5.83252515 C5.35653207,5.72659922 5.27340078,5.64346793 5.16747485,5.58681813 C5.06154893,5.53016832 4.9355339,5.5 4.77147233,5.5 L4.77147233,5.5 Z M11.2714723,5.5 L11.2285277,5.5 C11.0644661,5.5 10.9384511,5.53016832 10.8325251,5.58681813 C10.7265992,5.64346793 10.6434679,5.72659922 10.5868181,5.83252515 C10.5301683,5.93845107 10.5,6.0644661 10.5,6.22852767 L10.5,6.22852767 L10.5,6.27147233 C10.5,6.4355339 10.5301683,6.56154893 10.5868181,6.66747485 C10.6434679,6.77340078 10.7265992,6.85653207 10.8325251,6.91318187 C10.9384511,6.96983168 11.0644661,7 11.2285277,7 L11.2285277,7 L11.2714723,7 C11.4355339,7 11.5615489,6.96983168 11.6674749,6.91318187 C11.7734008,6.85653207 11.8565321,6.77340078 11.9131819,6.66747485 C11.9698317,6.56154893 12,6.4355339 12,6.27147233 L12,6.27147233 L12,6.22852767 C12,6.0644661 11.9698317,5.93845107 11.9131819,5.83252515 C11.8565321,5.72659922 11.7734008,5.64346793 11.6674749,5.58681813 C11.5615489,5.53016832 11.4355339,5.5 11.2714723,5.5 L11.2714723,5.5 Z M8,1.5 C6.61928813,1.5 5.5,2.61928813 5.5,4 L10.5,4 C10.5,2.61928813 9.38071187,1.5 8,1.5 Z"
                                          id="↳-Icon-Color"
                                          fill="#FFFFFF"
                                          fillRule="nonzero"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>

                    </div>

                  )}
                >
                  МАГАЗИН
                </Button>
              )}
            >
              <div className="Mindbreakers--ShopButton_textAfter">
                Купить мозголомки и бустеры.
              </div>
            </SimpleCell>
          </div>
        )
      )}
    >


      {(renderedCards.length > 0 ? (
        <Div style={{ paddingBottom: 0, paddingTop: '5px' }}>
          {renderedCards}
        </Div>
      ) : (
        <Placeholder
          icon={<Icon28MarketOutline width={38} height={43} />}
          action={<Button mode={'tertiary'}>Перейти в магазин</Button>}
        >
          Приобретайте мозголомки в магазине и зарабатывайте очки BP на чужих ошибках.
        </Placeholder>
      ))}


    </Group>

  );
};

Mindbreakers.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    isHot: PropTypes.bool,
    text: PropTypes.string,
    rent: PropTypes.number,
    tax: PropTypes.number,
  })).isRequired,
};
Mindbreakers.defaultProps = {};
export default Mindbreakers;
