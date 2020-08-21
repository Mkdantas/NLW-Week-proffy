import React from 'react';
import PageHeader from '../../components/PageHeader';

function TeacherForm() {
    return(
        <div id="page-teacher-form" className="container">
        <PageHeader title="Que incrivel que você quer dar aulas"
        description="O Primeiro passo é preencher esse formulário de inscrição" />
        
        <main>
            <fieldset>
                <legend>Seus dados</legend>
            </fieldset>
        </main>
        
        </div>
    )
}

export default TeacherForm;