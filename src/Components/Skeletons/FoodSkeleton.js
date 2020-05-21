import React from 'react';
import Skeleton from 'react-loading-skeleton';



const MenuCardSkeleton = () => {
  

  return (
    <div style={{ margin: "10px", width: "calc(100% - 28px)" }}>
      <div
        className="horizontal-card"
        style={{
          backgroundColor: "white",
          height: "calc(36vw + 22px)",
          margin: "15px 0px 15px 0px",
          position: "relative",
          boxShadow: "0px 5px 31.54px 6.46px rgba(154, 154, 154, 0.1)",
        }}
      >
        <div
          style={{
            float: "left",
            margin: "11px 20px 11px 11px",
            backgroundColor: "",
            width: "28vw",
            height: "36vw",
          }}
        >
          <Skeleton width={"100%"} height={"36vw"}/>
        </div>
        <div
          style={{
            // width:"calc(100% - 175px)",
            paddingTop: "10px",
          }}
        >
          <div
            // style={{backgroundColor:"#c0c0c0",height:"15px",width:"36vw" ,float:"",margin:"0px 0px"}}
            className="food-menu-name"
            style={{
              fontFamily: "Poppins-Bold",
              color: "#00A852",
              lineHeight: "22px",
              fontSize:"18px"
            }}
          >
            <p style={{marginBottom:"4px"}}>
            <Skeleton height={20} width={110}/>
            </p>
            <Skeleton height={20} width={80}/>
            {/* <img
              src={item.isfav ? like_icon : heart_svg_icon}
              className="food-heart"
              style={{ float: "right", marginRight: "16px", marginTop: "10px" }}
            /> */}
          </div>
          {/* <div
            className="card-content"
            style={{
              // backgroundColor:"#c0c0c0",height:"15px",width:"25vw" ,float:"",margin:"0px 0px",
              marginTop: "-3px",
              fontFamily: "Poppins-SemiBold",
              color: "#828282",
            }}
          >
            <span style={{ fontFamily: "Poppins-Medium" }}> Fish </span>{" "}
            <span style={{ fontFamily: "Poppins-Thin", margin: "0px 5px" }}>
              {" "}
              |{" "}
            </span>{" "}
            <span style={{ fontFamily: "Poppins-Medium" }}> prawns </span>{" "}
            <span style={{ fontFamily: "Poppins-Thin", margin: "0px 5px" }}>
              
              
            </span>
            <span style={{ fontFamily: "Poppins-Medium" }}>
              
              Tamatoes
            </span>
            <span style={{ fontFamily: "Poppins-Thin", margin: "0px 5px" }}>
              {" "}
              |{" "}
            </span>{" "}
            <span style={{ fontFamily: "Poppins-Medium" }}>Rice</span>{" "}
            <span style={{ fontFamily: "Poppins-Thin", margin: "0px 5px" }}>
            </span>{" "}
            <span style={{ fontFamily: "Poppins-Medium" }}> potatoes </span>
          </div> */}
          <div className="text-center">
            <div className="food-menu-middle" style={{ background: "white" ,left:"calc(28vw + 30px)"}}>
              <Skeleton height={35} width={104}/>
            </div>
          </div>
        </div>
        
      </div>
      <div className="food-menu-btn text-center" style={{}}>
        <div
          className="btn btn-success"
          style={{
            fontSize: "11px",
            borderRadius: "4px",
            padding: "6px 13px",
            fontFamily: "Poppins-Medium",
            color: "white",
            marginRight: "50px",
            background:"white",
            border:"0px "
          }}
        
        >
          <Skeleton width={70} height={30}/>
        </div>
        <div
          className="btn "
          style={{
            borderRadius: "4px",
            fontSize: "11px",
            padding: "6px 16px ",
            fontFamily: "Poppins-Medium",
            color: "#63364E",
            background: "white",
            border: "1px solid white",
          }}
        
        >
         <Skeleton height={30} width={70}/>
        </div>
      </div>
     
      
    </div>
  );
};
const TextsliderSkeleton = () => {
  

  return (
    <div>
      {/* <LightSpeed  left collapse when={toggler[1] || toggler[2]} > */}
      <div>
        <div class="scrolling-wrapper" style={{marginBottom:"6px"}}>
          
          <span
            className={`food-select-unactive category-btn-active`}
            style={{ marginRight: "20px",border:"0",background:"white" }}
            
          >
            <Skeleton height={30} width={80}/>
          </span>
          <span
            className={`food-select-unactive category-btn-active`}
            style={{ marginRight: "20px" ,border:"0",background:"white"}}
            
          >
            <Skeleton height={30} width={80}/>
          </span>
          <span
            className={`food-select-unactive category-btn-active`}
            style={{ marginRight: "20px",border:"0",background:"white" }}
            
          >
            <Skeleton height={30} width={80}/>
          </span>
          <span
            className={`food-select-unactive category-btn-active`}
            style={{ marginRight: "20px", background:"white",marginLeft: "20px",border:"0" }}
            
          >
            <Skeleton height={30} width={80}/>
          </span>
          
        </div>
      </div>
    </div>
  );
};
const FoodSkeleton = () => {
    

    const initialdata=[1,2,3,4,5]
  


  return (
    <div>
      <p className="view-block">Rotate to portrait mode </p>
      <p className="desktop-block">We Support Mobile View Only</p>
      <div
        className="main-container"
        style={{
         
          padding: "20px 0% 0px 0px",
          margin: "0px 0px 90px 0px",
          // backgroundColor:"#9BE0B8",
          marginLeft: "0px",
          marginRight: "0px",
        }}
      >
        <div
          className="card  dash-banner"
          style={{
            backgroundColor: "white",
            border: "0px",
            borderRadius: "5px",
            margin: "0px 5% 30px 5%"
          }}
        >
        <Skeleton height={"18vh"} width={"100%"}/>
          
        </div>

        <div>
          <div
            style={{
              marginBottom: "10px",
              padding: "0px 0px 12px 0px",
              borderRadius: "10px",
              marginLeft: "0%",
              marginRight: "0%",
            }}
          >
            <TextsliderSkeleton
              
            />
       

           
            <div className="flex-container my-0">
              {initialdata.map((e, i) => {
                return (
                  
                    <MenuCardSkeleton   />
                  
                );
              })}

            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodSkeleton;