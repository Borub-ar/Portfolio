import classes from './Hero.module.css';

const Hero = () => {
  return (
    <div className={classes.hero}>
        <h1 className={classes.title}>Kacper Barabasz</h1>
        <p className={classes.sub_header}>Front-end Developer</p>
    </div>
  )
}

export default Hero