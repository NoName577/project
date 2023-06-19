import React from "react";
import { Container, Contant, Texts, Divan } from "./style";
import divan from "../../assents/img/image 1.png";
import { Buy } from "./style";
import { Four } from "./style";
import hean from "../../assents/img/cash.png";
import car from "../../assents/img/car.png";
import time from "../../assents/img/time.png";
import pro from "../../assents/img/production.png";
import oso from "../../assents/img/coop-icon.png";
import ope from "../../assents/img/delivery-box-icon.png";
import vnm from "../../assents/img/support-icon.png";
import vec from "../../assents/img/yes.png";
import den from "../../assents/img/re-icon.png";
import blue from "../../assents/img/blue.png"
import { Ends } from "./style";
import { Good } from "./style";
import { Tooter } from "./style";
import { The } from "./style";
import { Thend } from "./style";
import { Divanbg } from "./style";
export default function About() {
  return (
    <>
      <Container>
        <Contant>
          <Texts>
            <Texts.midle>О магазине</Texts.midle>
            <Texts.biges>
              Интернет-магазин «Лофт Мебель»: купите хорошуюмебель в один клик!
            </Texts.biges>
            <Texts.little>
              Уникальный формат интернет-магазина позволит вам купить лучшую
              мебель крупнейших российских фабрик максимально быстро и по
              выгодной цене! <br /> <br /> Мы благодарим за доверие более десятка
              производителей, которые дали нам возможность представлять лучшие
              образцы их продукции в российском интернет-пространстве. Прямые
              договоры на поставку мебели с фабрик обеспечивают наиболее
              привлекательные условия для наших покупателей.
            </Texts.little>
          </Texts>
          <Divan src={divan} />
        </Contant>

        <Buy>Покупайте с выгодой!</Buy>

        <Four>
          <Four.one src={hean} />
          <Four.Main>
            <Four.Text>Лучшая цена </Four.Text>
            <Four.Body>
              Предлагаем близкие к оптовым цены, которые дают возможность
              приобретать мебель дешевле, чем в розничных салонах и шоу-румах.
            </Four.Body>
          </Four.Main>
          <Four.one src={car} />
          <Four.Main>
            <Four.Text>Прямые поставки </Four.Text>
            <Four.Body>
              С ведущих мебельных фабрик уменьшают срок выполнения вашего
              заказа, даже если речь идет об изготовлении предметов по
              индивидуальному проекту.
            </Four.Body>
          </Four.Main>
          <Four.one src={time} />
          <Four.Main>
            <Four.Text>Экономие времени </Four.Text>
            <Four.Body>
              Не нашли оптимальный вариант или нет времени на поиски? Оставьте
              онлайн-заявку с критериями, и мы предложим вам несколько достойных
              образцов.
            </Four.Body>
          </Four.Main>
          <Four.one src={pro} />
          <Four.Main>
            <Four.Text>Изготовление на заказ </Four.Text>
            <Four.Body>
              Принимаем заявки на изготовление мебели по персональному
              дизайн-проекту от покупателей из любой точки России. Просим быть
              готовыми к авансированной оплате персональных заказов.
            </Four.Body>
          </Four.Main>
        </Four>
      </Container>
      <Good>
        <Good.delir>Самые «вкусные» предложения</Good.delir>
        <Good.chzq></Good.chzq>
        <Good.Text>
          Мы делаем всё необходимое, чтобы покупатели получали доступ к
          актуальным новинкам, которые представляет российский мебельный рынок.
          Познакомиться с каждой моделью, сравнить цены на аналоги и выбрать
          лучшее вы можете прямо сейчас. Хотите первыми узнавать о самых
          выгодных предложениях? Тогда подписывайтесь на информационную
          рассылку!
        </Good.Text>

        <Good.deli>Гарантированное качество</Good.deli>
        <Good.chzq></Good.chzq>
        <Good.Text>
          Вся продукция сопровождается гарантией производителя. В каталогах
          представлена только сертифицированная мебель. Собственный контроль
          качества тщательно проверяет каждый образец перед отправкой заказчику.
          Покупатели получают необходимые документы – гарантийный талон и чек.
        </Good.Text>

        <Good.deli>Впечатляющий ассортимент</Good.deli>
        <Good.chzq></Good.chzq>
        <Good.Text>
          Ежедневно мы выбираем для наших каталогов идеальные образцы из
          товарной матрицы производителей по всей России. Модные расцветки,
          экологически безопасные материалы, надежные комплектующие – у нас вы
          найдете мебель своей мечты!
        </Good.Text>
      </Good>

      <Container>
        <Ends>
          <Ends.Main>
            <Ends.Img src={oso} />
            <Ends.Title>Особенные условия для оптовиков</Ends.Title>
            <Ends.Text>
              Число наших оптовых покупателей неуклонно возрастает и всё потому,
              что мы сумели предложить владельцам мебельных магазинов наиболее
              выгодные условия.
            </Ends.Text>
          </Ends.Main>
          <Ends.Main>
            <Ends.Img2 src={ope} />
            <Ends.Title>Оперативная доставка</Ends.Title>
            <Ends.Text>
              Собственная курьерская служба быстро привезет купленную мебель по
              указанному адресу. В российские регионы доставка осуществляется
              силами транспортных компаний.
            </Ends.Text>
          </Ends.Main>
          <Ends.Main>
            <Ends.Img3 src={vnm} />
            <Ends.Title>Внимательный сервис</Ends.Title>
            <Ends.Text>
              Квалифицированные менеджеры интернет-магазина ответят на все
              вопросы по ассортименту и предоставляемым возможностям, а также
              помогут оформить заказ и проконтролируют реализацию клиентских
              пожеланий при заказе мебели.
            </Ends.Text>
          </Ends.Main>
          <Ends.Main>
            <Ends.Img4 src={den} />
            <Ends.Title>
              Каждый пятый покупатель заказывает у нас <br /> повторно!
            </Ends.Title>
            <Ends.Text>
              И мы благодарим всех, кто воспользовался нашим уникальным
              предложением, заказал мебель быстро и недорого и порекомендовал
              друзьям и знакомым.
            </Ends.Text>
          </Ends.Main>
        </Ends>

        <Tooter>Мы поможем сэкономить время, силы и деньги!</Tooter>

        <The>
          <The.Img src={vec} />
          <The.Text>
            Время. <br /> Примем вашу заявку в кротчайшие сроки. При необходимости
            подберем для вас достойные варианты по заданным критериям.
          </The.Text>

          <The.Img src={vec} />
          <The.Text>
            Силы. <br /> Закупим оптом или закажем на фабрике, избавив от длительных
            обсуждений заказа с исполнителем. Курируем все этапы работы над
            заказом.
          </The.Text>

          <The.Img src={vec} />
          <The.Text>
            Деньги. <br /> Вы точно купите мебель дешевле, чем в розницу.
          </The.Text>
        </The>

        <Thend>
          На чем мы не экономим? <br /> На вашем комфорте и качестве мебели!
        </Thend>
      </Container>
    </>
  );
}
