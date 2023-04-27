import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'


const SocialMedia = () => {
  return (
    <div className="flex justify-center my-10 gap-7">
      <a
      className="hover:text-blue transition duration-500"
      href="https://www.linkedin.com/in/hugo-aguiar-a25839245/"
      target="_blank"
      rel="noreferrer"
      >
        <AiFillLinkedin size={40}/>
      </a>

      <a
      className="hover:text-blue transition duration-500"
      href="https://github.com/aguiarHugo"
      target="_blank"
      rel="noreferrer"
      >
        <AiFillGithub size={40}/>
      </a>
    </div>
  )
}

export default SocialMedia