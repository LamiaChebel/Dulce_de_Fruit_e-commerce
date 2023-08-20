function Form() {
    return (
        <>
            {/* Formulaire de newsletter*/}
            <form action="" method="post">
                <fieldset>
                    <legend>Inscription &agrave; la newsletter</legend>
                    <label htmlFor="mail">E-mail :</label>
                    <input type="email" name="mail" id="mail" placeholder="Entrez votre e-mail" />
                    <input type="submit" value="S'inscrire" />
                </fieldset>
            </form>
        </>
    )
}

export default Form;