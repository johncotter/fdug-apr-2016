import React from "react";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle,
  TableHeaderItem, TableItem, TableRow, Table, Text
} from "../src";

import Counter from "../assets/Counter";
import TickTock from "../assets/TickTock";

import preloader from "../src/utils/preloader";

import createTheme from "../src/themes/default";

import Interactive from "../assets/interactive";

require("normalize.css");
require("../src/themes/default/index.css");

const images = {
  noProps: require("../assets/dont_touch_props.jpg"),
  flux: require("../assets/flux.jpg"),
  fluxReact: require("../assets/flux-diagram.png"),
  madprops: require("../assets/madprops.jpg"),
  me: require("../assets/me.jpg"),
  mixins: require("../assets/mixins.jpg"),
  reactLogo: require("../assets/react-logo.png"),
  reactionBG: require("../assets/reaction-bg.jpg"),
  reactBG1: require("../assets/react-logo-bg.png"),
  reactBG2: require("../assets/reactjs.jpg"),
  reactBG3: require("../assets/react_cool_bg.jpg"),
  reactcomponents: require("../assets/thinking-in-react-components.png"),
  reactmock: require("../assets/thinking-in-react-mock.png"),
  virtualDOM: require("../assets/virtualdom.jpg"),
  virtualDOMExample: require("../assets/virtualdom-example.jpg"),
  airbnb: require("../assets/logos/airbnb.png"),
  cvent: require("../assets/logos/cvent.png"),
  dropbox: require("../assets/logos/dropbox.png"),
  facebook: require("../assets/logos/facebook.png"),
  imdb: require("../assets/logos/imdb.png"),
  instagram: require("../assets/logos/instagram.png"),
  netflix: require("../assets/logos/netflix.png"),
  plex: require("../assets/logos/plex.png"),
};

preloader(images);

const theme = createTheme({
  primary: "#30a7c8"
});

/*
  <Link href="https://github.com/johncotter/fdug-apr-2016">
    <Text bold caps textColor="tertiary">View on Github</Text>
  </Link>
*/

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress="none" controls={false}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              An Introduction To
            </Heading>
            <Heading size={1} fit caps lineHeight={1}>
              React.JS
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes={<ul>
              <li>cvent</li>
              <li>work on React.js apps everyday</li>
              <li>talk about UI dev experience and how React re-energized</li>
            </ul>}>
            <Heading size={2} caps textColor="primary" textFont="primary">
              About Me
            </Heading>
            <Image src={images.me.replace("/", "")} margin="0px auto 40px" height="293px"/>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.reactionBG.replace("/", "")} bgDarken={0.75} notes={<ul>
              <li>library for creating user interfaces</li>
              <li>solves complex UI rendering</li>
              <li>render ui and respond to events</li>
            </ul>}>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              What is React?
            </Heading>
            <Image src={images.reactLogo.replace("/", "")} margin="0px auto 40px" height="293px"/>            
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="darkgray">
            <Heading caps fit margin="0 0 70px 0">Is anyone actually using React?</Heading>
            <Layout>
              <Fill>
                <Image src={images.facebook.replace("/", "")} height="100px" />
                <Image src={images.airbnb.replace("/", "")} height="80px" />
                <Image src={images.dropbox.replace("/", "")} height="80px" />
              </Fill>
              <Fill>
                <Image src={images.instagram.replace("/", "")} height="90px" />
                <Image src={images.netflix.replace("/", "")} height="90px" />
                <Image src={images.plex.replace("/", "")} height="90px" />
              </Fill>
              <Fill>
                <Appear><Text margin="30px 0 0 0">and...</Text></Appear>
                <Appear><Image src={images.cvent.replace("/", "")} height="120px" /></Appear>
                <Appear><Text>and...</Text></Appear>
                <Appear><Text><em>this presentation</em></Text></Appear>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "spin"]} bgColor="primary" notes={<ul>
              <li>only responsible for displaying UI</li>
            </ul>}>

            <Heading caps fit>React is <b>not</b> MVC</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10} padding={20}>
                  Modal
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10} padding={20}>
                  View
                </Heading>
                <Appear>
                  <Fill>
                    <Text>
                      <hr />
                      <Heading size={4} textColor="secondary" bgColor="white" margin={10} padding={20}>REACT</Heading>
                    </Text>
                  </Fill>
                </Appear>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10} padding={20}>
                  Controller
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps textColor="primary" textFont="primary">
              Think in components
            </Heading>
            <Image src={images.reactmock.replace("/", "")} margin="10px" height="400px"/>
            <Appear><Image src={images.reactcomponents.replace("/", "")} margin="10px" height="400px"/></Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="modular & reusable">
            <Heading caps fit>What is a component?</Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="can also use ES6 syntax">
            <Heading caps fit>Component example</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/hello.example")}
              margin="20px auto"
              textSize="18px"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={6} textColor="white">
              JSX
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/jsx.example")}
              margin="20px auto"
              textSize="18px"
            />
            <Heading size={6} textColor="white">
              Converted to JS
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/jsx2js.example")}
              margin="20px auto"
              textSize="18px"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes={
              <ul>
                <li>passed in from parent</li>
                <li>this.props read-only</li>
              </ul>
            }>
            <Heading caps>Props</Heading>
            <Image src={images.madprops.replace("/", "")} margin="10px" height="250px"/>
            <Text textColor="white"><strong>Why was the prop mad?</strong></Text>
            <Appear><Text textColor="white"><strong>Because it was touched</strong></Text></Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes={
              <ul>
                <li>can be defaulted & validated</li>
                <li>getDefaultProps</li>
                <li>propTypes</li>
              </ul>
            }>
            <Heading caps>Props example</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/hello.prop.example")}
              margin="20px auto"
              textSize="18px"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="black">
            <Image src={images.noProps.replace("/", "")} margin="10px" height="400px"/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes={
              <ul>
                <li>created within a component</li>
                <li>state should be considered private</li>
              </ul>
            }>
            <Heading caps>State</Heading>
            <Appear>
              <Text textSize="50pt" bgColor="#800000" textColor="white" padding="50px">
                For Internal Use Only
              </Text>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes={
              <ul>
                <li>getInitialState</li>
                <li>this.state to read</li>
              </ul>
            }>
            <Heading caps>State example</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/hello.state.example")}
              margin="20px auto"
              textSize="18px"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes={
              <ul>
                <li>this.setState() to update</li>
              </ul>
            }>
            <Heading caps>setState Example</Heading>
            <Layout>
              <Fill>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/Counter.example")}
                  margin="20px auto"
                  textSize="18px"
                />
              </Fill>
              <Appear>
                <Fill>
                  <Counter />
                </Fill>
              </Appear>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgImage={images.virtualDOM.replace("/", "")} bgDarken={0.50}>
            <Heading caps fit>Virtual DOM</Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="black" notes={
              <ul>
                <li>Re-render when data is dirty (ie: setState)</li>
                <li>Does this using virtual DOM to generate a real DOM patch</li>
              </ul>
            }>
            <Heading caps fit>Virtual DOM example</Heading>
            <Image src={images.virtualDOMExample.replace("/", "")} margin="10px" height="400px"/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="componentWillMount - before the initial render occurs, if you call setState within this method, render() will see the updated state and will be executed only once">
            <Heading caps>Lifecycle (init)</Heading>
            <Layout>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="secondary" bgColor="white" margin={10} padding={20}><strong>getDefaultProps()</strong></Text>
                </Fill>
              </Appear>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="white" margin={10} padding={20}>Cannot use <strong>this.state</strong> or <strong>this.setState()</strong></Text>
                </Fill>
              </Appear>
            </Layout>
            <Layout>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="secondary" bgColor="white" margin={10} padding={20}><strong>getInitialState()</strong></Text>
                </Fill>
              </Appear>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="white" margin={10} padding={20}>Cannot use <strong>this.state</strong> or <strong>this.setState()</strong></Text>
                </Fill>
              </Appear>
            </Layout>
            <Layout>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="secondary" bgColor="white" margin={10} padding={20}><strong>componentWillMount()</strong></Text>
                </Fill>
              </Appear>
              <Fill>
                <Text textSize="20pt" margin={10} padding={20}></Text>
              </Fill>
            </Layout>
            <Layout>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="secondary" bgColor="white" margin={10} padding={20}><strong>render()</strong></Text>
                </Fill>
              </Appear>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="white" margin={10} padding={20}>Cannot use <strong>this.setState()</strong></Text>
                </Fill>
              </Appear>
            </Layout>
            <Appear>
              <hr />
            </Appear>
            <Layout>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="secondary" bgColor="white" margin={10} padding={20}><strong>componentDidMount()</strong></Text>
                </Fill>
              </Appear>
              <Fill>
                <Text textSize="20pt" margin={10} padding={20}></Text>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps>Lifecycle (update)</Heading>
            <Layout>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="secondary" bgColor="white" margin={10} padding={20}><strong>componentWillReceiveProps(props)</strong></Text>
                </Fill>
              </Appear>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="white" margin={10} padding={20}>Skipped if no props are changed, can use <strong>this.setState</strong></Text>
                </Fill>
              </Appear>
            </Layout>
            <Layout>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="secondary" bgColor="white" margin={10} padding={20}><strong>shouldComponentUpdate(props, state)</strong></Text>
                </Fill>
              </Appear>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="white" margin={10} padding={20}>Skipped if forced update, cannot use <strong>this.setState</strong></Text>
                </Fill>
              </Appear>
            </Layout>
            <Layout>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="secondary" bgColor="white" margin={10} padding={20}><strong>componentWillUpdate(props, state)</strong></Text>
                </Fill>
              </Appear>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="white" margin={10} padding={20}>Cannot use <strong>this.setState()</strong></Text>
                </Fill>
              </Appear>
            </Layout>
            <Layout>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="secondary" bgColor="white" margin={10} padding={20}><strong>render()</strong></Text>
                </Fill>
              </Appear>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="white" margin={10} padding={20}>Cannot use <strong>this.setState()</strong></Text>
                </Fill>
              </Appear>
            </Layout>
            <Appear>
              <hr />
            </Appear>
            <Layout>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="secondary" bgColor="white" margin={10} padding={20}><strong>componentDidUpdate(props, state)</strong></Text>
                </Fill>
              </Appear>
              <Fill>
                <Text textSize="20pt" margin={10} padding={20}></Text>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps margin="0 0 100px 0">Lifecycle (destroy)</Heading>
            <Layout>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="secondary" bgColor="white" margin={10} padding={20}><strong>componentWillUnmount()</strong></Text>
                </Fill>
              </Appear>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="white" margin={10} padding={20}>Cannot use <strong>this.setState()</strong></Text>
                </Fill>
              </Appear>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgImage={images.mixins.replace("/", "")} bgDarken={0.50}>
            <Heading caps fit>Mixins</Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgDarken={0.50}>
            <Heading caps>Mixin Example</Heading>
            <Layout>
              <Fill>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/mixin.example")}
                  margin="20px 0 0 0"
                  textSize="16px"
                />
                <Appear>
                  <Fill>
                    <TickTock />
                  </Fill>
                </Appear>
              </Fill>
              <Fill>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/mixin2.example")}
                  margin="20px"
                  textSize="16px"
                />
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgImage={images.flux.replace("/", "")} bgDarken={0.25}>
            <Heading caps margin="340px 0 0 0">awh... FLUX</Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="black" notes={<ul>
                <li>response to MVC</li>
                <li>one way data flow</li>
                <li>data architecture, not framework</li>
              </ul>
            }>
            <Heading caps>flux structure</Heading>
            <Image src={images.fluxReact.replace("/", "")} margin="0px auto 40px" height="  293px"/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading fit>v15.0 vs v1.0</Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="black">
            <Heading caps fit>what's next?</Heading>
            <Layout>
              <Fill>
                <List size={4} textColor="white">
                  <ListItem>redux</ListItem>
                  <ListItem>react router</ListItem>
                  <ListItem>react motion</ListItem>
                </List>
              </Fill>
              <Fill>
                <List size={4} textColor="white">
                  <ListItem>react native</ListItem>
                  <ListItem>react intl</ListItem>
                  <ListItem>relay / graphql</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Q&A</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
