import Link from 'next/link'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import styles from '../styles/AboutCard.module.css'

export default function AboutCard({ githubData }) {
  {
    githubData && console.log(githubData)
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const githubRes = await fetch('https://api.github.com/users/bafox2')
  const githubData = await githubRes.json()
  console.log(githubData)
  return {
    props: {
      githubData,
    },
  }
}
