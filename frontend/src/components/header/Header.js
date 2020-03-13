import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: '#432B68'
  },
  headerDiv: {
    background: '#432B68'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontWeight: 'bold',
    flexGrow: 1,
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
}))

function Header () {

  const classes = useStyles()
  const preventDefault = event => event.preventDefault()

  return (
    <header>
      <div className={classes.headerDiv}>
        <Container maxWidth="md">
          <div className={classes.root}>
            <AppBar position="static" elevation={0} className={classes.appBar}>
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  <Link className={classes.link} href="/" onClick={preventDefault}>
                    STORIES
                  </Link>
                </Typography>
                <Button href="/posts" color="inherit">Posts</Button>
                <Button href="/categories" color="inherit">Categories</Button>
              </Toolbar>
            </AppBar>
          </div>
        </Container>
      </div>
    </header>
  )
}

export default Header
