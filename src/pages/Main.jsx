import "../css/Main.css"
import { useState, useEffect } from "react"
import { ClipLoader } from "react-spinners"
import { SidebarMenu } from "../components/SidebarMenu"


const Main = (
    {
        useState, useEffect,
        loading, setLoading,
        sidebarVis, setSidebarVis
    }
) => {

    return (
        <div className="App">
            <SidebarMenu
                useState={useState}
            />

            <div className="container2">
                <h1>Mars rover images</h1>
            </div>

            <div className="main">
                <button class="sidebarButton" icon="pi pi-arrow-right" onClick={(e) => setSidebarVis(true)}>Menu</button>
            </div>

            {loading === true ? (
                <ClipLoader loading={true} width={150} height={5} />
            ) : (
                <div className="mainContainer">
                <div className="bar"/>

                <h2>Rover Data</h2>
                <div>
                    <div>
                    {/* uncommenting the below block breaks the website.  */}
                        {/* <p>Rover : {roverData.rovers[rover.index].name}</p>
                        <p>Camera : {camera}</p>
                        <p>Viewing date : {date}</p>
                        <p>Landing date : {roverData.rovers[rover.index].landing_date}</p>

                        <p>Launch date : {roverData.rovers[rover.index].launch_date}</p>

                        <p>Date of latest picture : {roverData.rovers[rover.index].max_date}</p>
                        <p>Mission status : {roverData.rovers[rover.index].status}</p>
                        <p>Total photos taken : {roverData.rovers[rover.index].total_photos}</p> */}
                    </div>
                </div>
                <div className="bar"/>
                
                <div>
                    <div>
                    <div class="grid">
                        {/* {data && 
                        data.map((picture, index) => {
                            if (picture.camera.name == camera || camera == undefined){ 
                                return (
                                    <img key={index} class = "img" src={picture.img_src} alt="" />
                                )
                            }
                        })
                        } */}
                    </div>
                    </div>
                </div>
                </div>
            )}
        </div>
    )
}

export {Main}
