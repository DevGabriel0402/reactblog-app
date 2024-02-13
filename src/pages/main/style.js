import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 10px;
  margin-top: 50px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 24px;
  width: 350px;
  height: 488px;
  padding: 10px;

  .content-image {
    position: relative;
  }

  .imageThumb {
    object-fit: cover;
    width: 100%;
    border-radius: 16px;
  }

  .category {
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 5px 10px;
    width: fit-content;
    background-color: #4b6b89;
    color: #fff;
    border-radius: 25px;
  }

  .content-text {
    display: flex;
    width: 350px;
    height: 488px;
    padding: 10px;
    flex-direction: column;
    gap: 10px;
    padding-block-start: 15px;
    padding: 10px 15px;

    .title {
      font-size: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 60px;
    }

    .description {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      line-height: normal;
      height: 60px;
    }

    .content-perfil {
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;

      .imagePerfil {
        border-radius: 50%;
        object-fit: cover;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px
          8px;
      }

      .name {
        font-weight: 600;
      }
    }
  }
`;
