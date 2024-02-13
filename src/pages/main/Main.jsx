import { Fragment, useEffect, useState } from "react";
import { Card, Container } from "./style";
import api from "../../service/api";



const Main = () => {

    const [post, setPost] = useState([])

    useEffect(() => {


        async function loadData() {
            try {
                const response = await api.get('/posts')
                setPost(response.data)
            }

            catch (error) {
                console.error(error)
                console.log("Servidor caiu ❌")

            }

        }
        loadData()



    })


    return (
        <div className="container">

            <h1>Artigos</h1>
            <Container>
                {post.map((post, index) => (
                    <Card key={index}>
                        <div className="content-image">
                            <p className="category">{post.category}</p>
                            <img className="imageThumb" width={360} height={240} src={post.imageUrl} alt={post.imageAlt} />
                        </div>

                        <div className="content-text">
                            <h4 className="title">
                                {post.title}
                            </h4>
                            <p className="description">
                                {post.description}
                            </p>
                            <div className="content-perfil">
                                <img className="imagePerfil" width={50} height={50} src={post.imagePerfil} alt="image perfil" />
                                <div className="content-name">
                                    <p className="name">{post.author}</p>
                                    <p className="date">{post.date}</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}

            </Container>
        </div>
    );
}

export default Main;