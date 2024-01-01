import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Subjects from './Subjects';
import { FiEdit } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";
import {SubjectName, SubjectDelete, SubjectEdit } from './StyledComponent';
import React from 'react';
import styled from 'styled-components';

const SubjectHeader = styled.span`
    display:flex;
    justify-content: space-between;
    flex-direction: row;
    padding-top:0px;
    height:30px;`;

const SubjectWrapper = styled.div`
    height:150px;
    width:150px;
    background-color: rgb(167, 155, 243);
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    padding-top:0px;
    pading-bottom:30px;
    border:10px solid rgb(167, 155, 243);
    border-radius:25px;
`;

const AreaOverview = styled.ul`
    display:grid;
    grid-template-columns: repeat(auto-fill, 180px);
    grid-row-gap: 20px;
    grid-auto-rows: 180px;
    width: min(calc(100% - 300px), 70%);`;
function OverviewArea({ list, changeList, changeShowingIndex }) {
    const CircularProgressBar = ({ percentage }) => {
        return (
            <div style={{ width: '90px', margin: 'auto' }}>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                        textColor: 'black',
                        pathColor: 'rgb(139, 123, 244);',
                        trailColor: '#d6d6d6',
                        height: '30%',
                    })}
                />
            </div>
        );
    };

    const onClickDeleteSubject = (index) => {
        changeList(prevList => {
            if (index === list.subjects.length - 1) changeShowingIndex(-1);
            const updatedList = new Subjects();
            updatedList.subjects = [...prevList.subjects];
            updatedList.deleteSubject(index);

            return updatedList;
        })
    }
    const onClickShowing = (index) => {
        changeShowingIndex(index);
    }
    return (
        <AreaOverview>
            {list.subjects.map((subject, index) => (
                (<li key={index}>
                    <SubjectWrapper>
                        <SubjectHeader>
                            <SubjectName onClick={() => onClickShowing(index)}> {index + 1 + ". " + subject.name}</ SubjectName>
                            <span>
                                <SubjectEdit>
                                    <FiEdit size="20"/>
                                    {/* <Modal123 subjectIndex={index} list={list} changeList={changeList}/> */}
                                </SubjectEdit>
                                <SubjectDelete onClick={() => onClickDeleteSubject(index)}><TiDeleteOutline size="24"/></SubjectDelete>
                            </span>
                        </SubjectHeader>
                        <CircularProgressBar percentage={subject.progressPercent} />
                    </SubjectWrapper>
                </li>)
            ))}
        </AreaOverview>
    )
}

export default OverviewArea;