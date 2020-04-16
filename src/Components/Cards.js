import React,{useState,useEffect} from 'react';
import check_right from './../Icons/Icons-Footer/check_tick.jpg'
import Swiper from 'react-id-swiper';
import plus_icon from './../Icons/Icons-Footer/plus_math.png';
import home_icon from './../Icons/Icons-Footer/home.png';
import './Cards.css'
import { useSwipeable, Swipeable } from 'react-swipeable'
import mobiscroll from 'mobiscroll';
// import 'mobiscroll/react/dist/css/mobiscroll.min.css';
// import {SwipeableList,SwipeableListItem} from '@sandstreamdev/react-swipeable-list'
const MenuCard=()=>{
    const handlers = useSwipeable({
    onSwipedLeft: () => {console.log("left")},
    // onSwipedRight: () => {};
    // console.log("right")},
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
    return (
        
        <div className="horizontal-card"  {...handlers} >
            <div className="float-right" style={{margin:"5px 5px 5px 0px"}}>
            <img className="" src={plus_icon} height="70px" width="70px" style={{border:"2px solid white"}}/>
            </div>
            
        </div>
        
        
    )
}

const defaultswipe={
    "left":false,
    "right":false
}
const Cards=()=>{
    const [swipe,setSwipe]=useState({"left":false,"right":true})
    // const container = document.querySelector('. container')
    // console.log(container.scrollTop)
    // container.scrollLeft
    useEffect(()=>{
        setSwipe({"left":false,"right":true});
    },[])
    useEffect(()=>{
        console.log("UseEffect");
    },[swipe])
    const params = {
    pagination: {
      
    },
    // effect: 'fade',
    // effect:"cube",
  slidesPerView: 'auto',
  paginationClickable: true,
  spaceBetween: 15
    }

    

    return (

        <div className="main-container"  style={{
            maxHeight:"calc(100vh - 110px)",overflowY:"scroll",
            padding:"20px 0%",margin:"0",backgroundColor:"#9BE0B8",marginLeft:"0px",marginRight:"0px"}}>


        <div className="card  dash-banner" style={{backgroundColor:"#E5F5EE",border:"0px",borderRadius:'5px',margin:"0px 5% 0px 5%"}}>
            
            </div>
         {/* <div className="flex-container" > */}
         
            {/* <div className="food-icon-card" > */}
            {/* </div> */}
            {/* <div className="food-icon-card mg-left" >
            </div> */}
            {/* </div> */}
         {/* <Swiper {...params} > */}
        <div >
                  <div className="flex-container" >
         
            <div className="food-icon-card" >
            1
            
            </div>
                        <div className="food-icon-card mg-left" >
            1
            
            </div>
            {/* <div className="food-icon-card mg-left" >
            </div> */}
            </div>
        <div  style={{backgroundColor:"white",marginBottom :"10px",padding:"0px 8px 12px 8px",borderRadius:"10px",marginLeft:"5%",marginRight:"5%"}}>
        <p style={{margin:"20px 0px 0px 0px"}} className="mt-4"> Category-1</p>
                <div className="flex-container my-0" >
                
                    <MenuCard  />
                    <MenuCard/>
                </div>
        <p style={{margin:"20px 0px 0px 0px"}} className="mt-5"> Category-2</p>
                    <div className="flex-container my-0" >
                <MenuCard/>
                <MenuCard/>
                <MenuCard/>
                <MenuCard/>
                <MenuCard/>
                    
                </div>
        </div>
        </div>
        
            {/* <div className="flex-container">
            <div className="icon-card" >
            </div>
            <div className="icon-card mg-left" >
            </div>
            </div>
            <div className="flex-container">
            <div className="icon-card" >
            </div>
            <div className="icon-card mg-left" >
            </div>
            </div>
            <div className="flex-container">
            <div className="icon-card" >
            </div>
            <div className="icon-card mg-left" >
            </div>
            </div> */}
            {/* <div className="flex-container" >
            <div className="icon-card" >
            </div>
            <div className="icon-card mg-left" >
            </div>
            </div> */}
        
        {/* </Swiper> */}

        

        </div>
    )
}


class ListItem extends React.Component {
    render() {
        return <li data-icon="image2">{this.props.item.name}</li>;
    }
}

class Cards2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listImages: [
                { id: 1, name: 'Image 1' },
                { id: 2, name: 'Image 2' },
                { id: 3, name: 'Image 3' },
                { id: 4, name: 'Image 4' },
                { id: 5, name: 'Image 5' }
            ],
            menuImages: [
                { id: 1, name: 'My Image 1' },
                { id: 2, name: 'My Image 2' },
                { id: 3, name: 'My Image 3' },
                { id: 4, name: 'My Image 4' },
                { id: 5, name: 'My Image 5' }
            ]
        };
    }
    
    removeItem(index) {
        const listImages = this.state.listImages.slice(0);
        listImages.splice(index, 1);
        this.setState({
            listImages: listImages
        });
    }
    
    removeItem2(index) {
        const menuImages = this.state.menuImages.slice(0);
        menuImages.splice(index, 1);
        this.setState({
            menuImages: menuImages
        });
    }
    
    toast(message) {
        mobiscroll.toast({
            message: message
        });
    }
    
    stages = {
        left: [ {
            percent: 25,
            icon: 'link',
            text: 'Get link',
            action: (event, inst) => {
                this.toast('Link copied');
            }
        }, {
            percent: 50,
            icon: 'download',
            text: 'Download',
            action: (event, inst) => {
                this.toast('Downloaded');
            }
        }],
        right: [{
           percent: -25,
            icon: 'print',
            text: 'Print',
            action: (event, inst) => {
                this.toast('Printing...');
            } 
        }, {
            percent: -50,
            icon: 'remove',
            text: 'Delete',
            confirm: true,
            action: (event, inst) => {
                inst.remove(event.target, null, () => {
                    this.removeItem(event.index);
                });
                return false;
            }
        }]
    };
    
    actions = [{
        icon: 'link',
        action: (event, inst) => {
            this.toast('Link copied');
        }
    }, {
        icon: 'star3',
        action: (event, inst) => {
            this.toast('Starred');
        }
    }, {
        icon: 'download',
        action: (event, inst) => {
            this.toast('Downloaded');
        }
    }, {
        icon: 'print',
        action: (event, inst) => {
            this.toast('Printing...');
        }
    }, {
        icon: 'remove',
        action: (event, inst) => {
            inst.remove(event.target, null, () => {
                this.removeItem2(event.index);
            });
            return false;
        }
    }];
    
    render() {
        return (
            <mobiscroll.Form theme="ios"  themeVariant="light">
                <mobiscroll.FormGroup>
                    <mobiscroll.FormGroupTitle>Action list</mobiscroll.FormGroupTitle>
                    <mobiscroll.Listview
                        theme="ios" 
                        themeVariant="light"
                        itemType={ListItem} 
                        data={this.state.listImages}
                        enhance={true}
                        stages={this.stages}
                    />
                </mobiscroll.FormGroup>
                <mobiscroll.FormGroup>
                    <mobiscroll.FormGroupTitle>Action menu</mobiscroll.FormGroupTitle>
                    <mobiscroll.Listview
                        theme="ios" 
                        themeVariant="light"
                        itemType={ListItem} 
                        data={this.state.menuImages}
                        enhance={true}
                        actions={this.actions}
                    />
                </mobiscroll.FormGroup>
            </mobiscroll.Form>
        );
    }    
}
export default Cards;
// export default Cards2;




// <div {...handlers} style={{display:swipe.right?'none':'block'}}>
//          <div className="flex-container" >
         
//             <div className="food-icon-card" >
//             2
            
//             </div>
//             {/* <div className="food-icon-card mg-left" >
//             </div> */}
//             </div>
//             <div></div>
//         <div style={{backgroundColor:"white",marginBottom :"10px",padding:"0px 8px 12px 8px",borderRadius:"10px",marginRight:"4%"}}>
        
//         <p style={{margin:"20px 0px 0px 0px"}} className="mt-4"> Category-1</p>
//         <div className="flex-container my-0" >
           
//             <MenuCard/>
//             <MenuCard/>
//         </div>
//         <p style={{margin:"20px 0px 0px 0px"}} className="mt-5"> Category-2</p>
//             <div className="flex-container my-0" >
//            <MenuCard/>
//            <MenuCard/>
//            <MenuCard/>
//            <MenuCard/>
//            <MenuCard/>
            
//         </div>
//         </div>
//         <div style={{backgroundColor:"white",width:"20px",float:"right"}}></div>
//         </div>