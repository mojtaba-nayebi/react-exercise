import './App.css';
import React from 'react';
function App() {
  return (
    <div className="tabs">
        <h1>سایت گردشگری ایران</h1>
        <p>میتونی شهرای ایرانو از اینجا مشاهده کنی کمی در موردشون بخونی</p>
       <Tabs>
         <Tab label="اصفهان">
           <div>
            <div className="items">
              <img src='https://th.bing.com/th/id/OIP.kj8nUiGyZKlpLiHnuqCCPAHaEl?rs=1&pid=ImgDetMain' alt=''></img>
              <p className='summary'>
                اینجا سی و سه پل اصفهان یکی از جذابه های این شهر بزرگ است مکانی زیبا و با صفا در کنار سی و سه پل هم رستوران ها و کافی شاپ هایی هم برای استراحت وجود دارد.
              </p>
            </div>
             <p className="ticket">دریافت بلیط</p>
           </div>
         </Tab>
         <Tab label="شیراز">
           <div>
            <div className="items">
              <img src='https://th.bing.com/th/id/OSK.HEROCLICKTHROUGHgP86Y4RTl-MTTGC4CGcwkvOVyg-oR27_tTdGMuJ4QVE?rs=1&pid=ImgDetMain' alt=''></img>
              <p className='summary'>
                اینجا مقبره شاعر بزرگ ایران حافظ است که اشعار بسیاری را نوشته و همچنین دیوان اشعار او را ایرانیان برای گرفتن فال در شب یلدا استفاده میکنند
              </p>
            </div>
             <p className="ticket">دریافت بلیط</p>
           </div>
         </Tab>
         <Tab label="مازندران">
           <div>
            <div className="items">
              <img src='https://th.bing.com/th/id/OIP.lt7i44mqyLgyQ1_24AWRRwAAAA?rs=1&pid=ImgDetMain' alt=''></img>
              <p className='summary'>
                اینجا نه سویس است و نه یکی از روستاهای اروپا اینجا یکی از ییلاق های استان مازندران است و در این تور گردشگری کل استان مازندران را تماسا میکنید.
              </p>
            </div>
             <p className="ticket">دریافت بلیط</p>
           </div>
         </Tab>
         <Tab label="شوش">
           <div>
            <div className="items">
              <img src='https://th.bing.com/th/id/R.1090e5e3a86987cf5c2abc5046f666df?rik=UjN2cVoIAeVTPg&pid=ImgRaw&r=0' alt=''></img>
              <p className='summary'>
                اینجا چغازنبیل شوش ، بزرگترین بنای خشتی جهان هست که در شوش یکی از شهر های استان خوزستان واقع شده است و جز اثار بسیار جالب و ارزشمند ایران است.
              </p>
            </div>
             <p className="ticket">دریافت بلیط</p>
           </div>
         </Tab>
         <Tab label="مشهد">
           <div>
            <div className="items">
              <img src='https://th.bing.com/th/id/R.adda9b836905c2449c65ba9864aaecd3?rik=7HczgPCFzb0Qpw&riu=http%3a%2f%2fnedaesfahan.ir%2fwp-content%2fuploads%2f2015%2f08%2f1663189407.jpg&ehk=WNhm43SYqMH9leK%2fMVqgKpaXxqSHqwcNpevCM6cX2%2bA%3d&risl=&pid=ImgRaw&r=0' alt=''></img>
              <p className='summary'>
                اینجا حرم امام رضا ، امام هشتم شیعیان است.این حرم با ارزش با معماری زیبا هرساله پذیرایه زائران بی شمار است و همچنین مکانی مقدس برای راز و نیاز با امام هشتم و خداوند است.
              </p>
            </div>
             <p className="ticket">دریافت بلیط</p>
           </div>
         </Tab>
       </Tabs>
      </div>
      
    )
  }
class Tabs extends React.Component{
  state ={
    activeTab: this.props.children[0].props.label
  }
  changeTab = (tab) => {
    this.setState({ activeTab: tab });
  };
  render(){
    
    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, child =>{
          buttons.push(child.props.label)
          if (child.props.label === this.state.activeTab) content = child.props.children
        })}
         
        <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
        <div className="tab-content">{content}</div>
        
      </div>
    );
  }
}

const TabButtons = ({buttons, changeTab, activeTab}) =>{
   
  return(
    <div className="tab-buttons">
    {buttons.map(button =>{
       return <button className={button === activeTab? 'active': ''} onClick={()=>changeTab(button)}>{button}</button>
    })}
    </div>
  )
}

const Tab = props =>{
  return(
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}
export default App;
