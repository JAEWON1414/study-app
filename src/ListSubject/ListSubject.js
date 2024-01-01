import React from 'react';
import DetailArea from './DetailArea';
import Subjects from './Subjects';
import OverviewArea from './OverviewArea';
import { SubjectInput } from './StyledComponent';
import { } from './style.module.css';
import styled from 'styled-components';
const AreaContainer = styled.div`
    display:flex;
    justify-content: space-between;
    flex-direction: row;`;
function ListSubject() {
    const [subject, setSubject] = React.useState("");
    const [list, setList] = React.useState(new Subjects());
    const [showingIndex, setShowingIndex] = React.useState(-1);
    const onChangeSubject = (event) => {
        setSubject(event.target.value);
    }
    const onChangeShowingIndex = (updatedShowingIndex) => {
        setShowingIndex(updatedShowingIndex);
    }
    const onSubmitSubject = (event) => {
        event.preventDefault();
        if (subject === "") return;
        setList(prevList => {
            const updatedList = new Subjects();
            updatedList.subjects = [...prevList.subjects];
            updatedList.addSubject(subject);
            return updatedList;
        })
        setSubject("");
    }
    const changeList = (updatedList) => {
        setList(updatedList);
    }
    return (
        <div>
            <form onSubmit={onSubmitSubject}>
                <SubjectInput
                    style={{marginLeft:"28%"}}
                    type="Text"
                    value={subject}
                    placeholder="과목 이름 추가하기"
                    onChange={onChangeSubject} />
            </form>
            <AreaContainer>
                <OverviewArea list={list} changeList={changeList} changeShowingIndex={onChangeShowingIndex} />
                {showingIndex !== -1 ?
                    <DetailArea subjectIndex={showingIndex} list={list} changeList={changeList} /> : null}
            </AreaContainer>

        </div>
    );
}
export default ListSubject;