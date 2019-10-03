import express from 'express';
import exphbs from 'express-handlebars';
import methodOverride from 'method-override';
import routes from './routes';
import path from 'path';

const app = express();

//View engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('views', path.join(__dirname, 'views'));
app.set('veiw engine', 'handlebars')

//method override
app.use(methodOverride('_method'));

// exphbs.registerHelper('select', function(selected, options) {
//   return options.fn(this).replace(
//       new RegExp(' value=\"' + selected + '\"'),
//       '$& selected="selected"');
// });

// exphbs.registerHelper('option', function(value, label, selectedValue) {
//   var selectedProperty = value == selectedValue ? 'selected="selected"' : '';
//   return new exphbs.SafeString('<option value="' + value + '"' +  selectedProperty + '>' + label + "</option>");
// });

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', routes);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

export default app;