import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer"
import React from 'react';

// Création des styles
const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontFamily: "Helvetica",
    },
    header: {
        marginBottom: 20,
        borderBottom: "1 solid #6366F1",
        paddingBottom: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#4F46E5",
    },
    subtitle: {
        fontSize: 12,
        color: "#6B7280",
        marginTop: 5,
    },
    section: {
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
        backgroundColor: "#F3F4F6",
        padding: 5,
        color: "#4F46E5",
    },
    row: {
        flexDirection: "row",
        marginBottom: 5,
    },
    column: {
        flex: 1,
    },
    label: {
        fontSize: 10,
        color: "#6B7280",
    },
    value: {
        fontSize: 12,
        marginBottom: 5,
    },
    signatureSection: {
        marginTop: 40,
        borderTop: "1 dashed #D1D5DB",
        paddingTop: 20,
    },
    signatureBox: {
        height: 100,
        border: "1 solid #D1D5DB",
        marginTop: 10,
        marginBottom: 10,
    },
    signatureLabel: {
        fontSize: 10,
        color: "#6B7280",
        textAlign: "center",
    },
    footer: {
        position: "absolute",
        bottom: 30,
        left: 30,
        right: 30,
        textAlign: "center",
        fontSize: 10,
        color: "#9CA3AF",
        borderTop: "1 solid #E5E7EB",
        paddingTop: 10,
    },
    logo: {
        width: 50,
        height: 50,
    },
})

// Création du document PDF
const PDFDocument = ({ formData }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>Fiche d'Inscription</Text>
                    <Text style={styles.subtitle}>Études à l'Étranger - {new Date().toLocaleDateString()}</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Informations Personnelles</Text>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Nom</Text>
                        <Text style={styles.value}>{formData.lastName}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Prénom</Text>
                        <Text style={styles.value}>{formData.firstName}</Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Date de Naissance</Text>
                        <Text style={styles.value}>{formData.birthDate}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Lieu de Naissance</Text>
                        <Text style={styles.value}>{formData.birthPlace}</Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Email</Text>
                        <Text style={styles.value}>{formData.email}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Téléphone</Text>
                        <Text style={styles.value}>{formData.phone}</Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Nom du Parent</Text>
                        <Text style={styles.value}>{formData.parentName}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Contact du Parent</Text>
                        <Text style={styles.value}>{formData.parentContact}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Programme d'Études</Text>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Pays</Text>
                        <Text style={styles.value}>{formData.country}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Université</Text>
                        <Text style={styles.value}>{formData.university}</Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Filière</Text>
                        <Text style={styles.value}>{formData.field}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Niveau</Text>
                        <Text style={styles.value}>{formData.level}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Hébergement</Text>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Type</Text>
                        <Text style={styles.value}>{formData.accommodation?.type}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Capacité</Text>
                        <Text style={styles.value}>{formData.accommodation?.capacity}</Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Prix mensuel</Text>
                        <Text style={styles.value}>{formData.accommodation?.price.toLocaleString()} FCFA</Text>
                    </View>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Services Complémentaires</Text>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Besoin d'un passeport</Text>
                        <Text style={styles.value}>{formData.needPassport ? "Oui" : "Non"}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Service de traduction</Text>
                        <Text style={styles.value}>{formData.needTranslation ? "Oui" : "Non"}</Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Contact dans le pays</Text>
                        <Text style={styles.value}>{formData.hasContact ? "Oui" : "Non"}</Text>
                    </View>
                </View>

                {formData.hasContact && formData.contactDetails && (
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.label}>Détails du contact</Text>
                            <Text style={styles.value}>{formData.contactDetails}</Text>
                        </View>
                    </View>
                )}
            </View>

            <View style={styles.signatureSection}>
                <Text style={styles.label}>
                    Je soussigné(e) {formData.firstName} {formData.lastName}, certifie l'exactitude des informations fournies
                    ci-dessus.
                </Text>

                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Date: {new Date().toLocaleDateString()}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Signature:</Text>
                        <View style={styles.signatureBox} />
                    </View>
                </View>
            </View>

            <View style={styles.footer}>
                <Text>Agence d'Études à l'Étranger - Tous droits réservés © {new Date().getFullYear()}</Text>
            </View>
        </Page>
    </Document>
)

export default PDFDocument

