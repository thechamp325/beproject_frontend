import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import MuiAppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Github from './github'

const styles = {
	root: {
		flexGrow: 1
	},
	flex: {
		flex: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	},
	title: {
		cursor: 'pointer'
	}
}

const AppBar = props => {
	const { classes, title, githubUser } = props
	return (
		<div className={classes.root}>
			<MuiAppBar position="static">
				<Toolbar>
					<Typography
						variant="title"
						color="inherit"
						className={`${classes.flex} ${classes.title}`}
						onClick={() => {
							alert('You clicked the title!')
						}}
					>
						{title}
					</Typography>
					{!!githubUser && (
						<IconButton color="inherit" href={githubUser ? `https://github.com/${githubUser}` : undefined}>
							<Github />
						</IconButton>
					)}
				</Toolbar>
			</MuiAppBar>
		</div>
	)
}

AppBar.propTypes = {
	classes: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
	githubUser: PropTypes.string
}

export default withStyles(styles)(AppBar)
