"use client";
import React, { useState } from 'react'
import ProjectHeader from "@/app/projects/projectHeader";
import Board from '../BoardView';
type Props = {
    params:{id:string}
}

const Project = ({params}: Props) => {
  const {id} = params;
  const [activeTab,setActiveTab] = useState("Board");
  const [isModalNewTaskOpen,setIsModelNewTaskOpen] = useState(false);

  
    return (<div>
    {/*MODEL NEW TASK*/}
    <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab}/>
    {activeTab === "Board" && (
        <Board id={id} setIsModalNewTaskOpen={setIsModelNewTaskOpen}/> 
    )}
    </div>
  );
};

export default Project;