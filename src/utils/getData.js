import { json } from "react-router-dom";

export async function getNotices(amount) {
  const response = await fetch("https://graphql.datocms.com", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_DATO_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{allNotices(first: "${amount}"){id title description description2 images {alt url}}}`,
    }),
  });

  if (!response.ok) {
    throw json({ message: "Nie można pobrać ogłoszeń (500)" }, { status: 500 });
  } else {
    return response;
  }
}

export async function getPosts(amount) {
  const response = await fetch("https://graphql.datocms.com", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_DATO_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{allBlogs(first: "${amount}") {id title date description author slug images {alt url} startImage {url alt} video {thumbnailUrl title}}}`,
    }),
  });

  if (!response.ok) {
    throw json({ message: "Nie można pobrać wydarzeń (500)" }, { status: 500 });
  } else {
    return response;
  }
}

export async function getPost(postId) {
  const response = await fetch("https://graphql.datocms.com", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_DATO_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{
        blog(filter: {id: {eq: "${postId}"}}) {
          author
          createdAt
          date
          description
          id
          slug
          title
          images {
            alt
            url
            video {
              streamingUrl
            }
          }
        }
      }`,
    }),
  });

  if (!response.ok) {
    throw json(
      { message: "Nie można pobrać wydarzenia (500)" },
      { status: 500 }
    );
  } else {
    return response;
  }
}

//preschool cisownica

export async function getPostsCis(amount) {
  const response = await fetch("https://graphql.datocms.com", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_DATO_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{allCispreschools(first: "${amount}") {id title date description author slug images {alt url} startImage {url alt} video {thumbnailUrl title}}}`,
    }),
  });

  if (!response.ok) {
    throw json({ message: "Nie można pobrać wydarzeń (500)" }, { status: 500 });
  } else {
    return response;
  }
}

export async function getPostCis(postId) {
  const response = await fetch("https://graphql.datocms.com", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_DATO_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{
        cispreschool(filter: {id: {eq: "${postId}"}}) {
          author
          createdAt
          date
          description
          id
          slug
          title
          images {
            alt
            url
            video {
              streamingUrl
            }
          }
        }
      }`,
    }),
  });

  if (!response.ok) {
    throw json(
      { message: "Nie można pobrać wydarzenia (500)" },
      { status: 500 }
    );
  } else {
    return response;
  }
}

// preschool równa
export async function getPostsRow(amount) {
  const response = await fetch("https://graphql.datocms.com", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_DATO_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{allPreschools(first: "${amount}") {id title date description author slug images {alt url} startImage {url alt} video {thumbnailUrl title}}}`,
    }),
  });

  if (!response.ok) {
    throw json({ message: "Nie można pobrać wydarzeń (500)" }, { status: 500 });
  } else {
    return response;
  }
}

export async function getPostRow(postId) {
  const response = await fetch("https://graphql.datocms.com", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_DATO_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{
        preschool(filter: {id: {eq: "${postId}"}}) {
          author
          createdAt
          date
          description
          id
          slug
          title
          images {
            alt
            url
            video {
              streamingUrl
            }
          }
        }
      }`,
    }),
  });

  if (!response.ok) {
    throw json(
      { message: "Nie można pobrać wydarzenia (500)" },
      { status: 500 }
    );
  } else {
    return response;
  }
}
